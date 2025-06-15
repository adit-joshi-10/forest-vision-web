
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Processing contact form submission:", formData);

      // Store the form data in the database
      const { data: submissionData, error: dbError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            organization: formData.organization || null,
            subject: formData.subject,
            message: formData.message,
            status: "new",
          },
        ])
        .select()
        .maybeSingle();

      let submissionId: string | null = null;

      if (dbError) {
        console.error("Database error (table might not exist yet):", dbError);
        toast({
          title: "Note",
          description: "Contact table is not fully set up yet, but your message will still be sent.",
          variant: "default",
        });
      } else if (submissionData && submissionData.id) {
        console.log("Contact submission saved to database:", submissionData);
        submissionId = submissionData.id;
      }

      // Send the email notification via edge function
      const { data: emailData, error: emailError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            ...formData,
            submissionId: submissionId,
          },
        }
      );

      if (emailError) {
        console.error("Email sending error:", emailError);
        toast({
          title: "Submission Received",
          description:
            "Your message has been saved but we may have trouble sending confirmation emails. We'll still respond to you.",
          variant: "default",
        });
      } else {
        console.log("Email sent successfully:", emailData);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. Your submission has been recorded and we'll get back to you soon.",
        });
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error processing contact form:", error);
      toast({
        title: "Submission Error",
        description: "Failed to process your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitted,
    setIsSubmitted,
    isSubmitting,
    setIsSubmitting,
    toast,
    handleInputChange,
    handleSubmit,
  };
};
