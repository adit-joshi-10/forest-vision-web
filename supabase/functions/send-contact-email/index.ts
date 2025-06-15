
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
  submissionId?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

    // If no Resend API key, just log the message
    if (!resend) {
      console.log("No RESEND_API_KEY found. Contact form submission logged:", formData);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Contact form processed successfully (email sending disabled - no API key)",
          submissionId: formData.submissionId
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Optional: Update the submission status in database if submissionId is provided
    if (formData.submissionId) {
      const { error: updateError } = await supabase
        .from('contact_submissions')
        .update({ 
          status: 'in_progress',
          updated_at: new Date().toISOString()
        })
        .eq('id', formData.submissionId);

      if (updateError) {
        console.error('Failed to update submission status:', updateError);
        // Don't fail the email sending if status update fails
      } else {
        console.log('Updated submission status to in_progress for ID:', formData.submissionId);
      }
    }

    // Send email to 180DC team with enhanced content
    const emailResponse = await resend.emails.send({
      from: "180DC Contact Form <onboarding@resend.dev>",
      to: ["aditjoshi0406@gmail.com"],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2E5945 0%, #1E3A29 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #E0E7E4; margin: 10px 0 0 0;">180 Degrees Consulting MUJ</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 25px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #2d3748; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #2d3748;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
                  <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${formData.email}" style="color: #3182ce;">${formData.email}</a></td>
                </tr>
                ${formData.organization ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Organization:</td>
                  <td style="padding: 8px 0; color: #2d3748;">${formData.organization}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Subject:</td>
                  <td style="padding: 8px 0; color: #2d3748;"><span style="background-color: #edf2f7; padding: 4px 8px; border-radius: 4px; font-weight: 500;">${formData.subject}</span></td>
                </tr>
                ${formData.submissionId ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Submission ID:</td>
                  <td style="padding: 8px 0; color: #2d3748; font-family: monospace; background-color: #f7fafc; padding: 4px 8px; border-radius: 4px;">${formData.submissionId}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #2d3748; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #3182ce;">
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #2d3748;">${formData.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #edf2f7; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #4a5568;">
                📧 This message was sent through the 180DC MUJ contact form<br>
                🕒 Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "180DC MUJ <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting 180 Degrees Consulting MUJ",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2E5945 0%, #1E3A29 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            <p style="color: #E0E7E4; margin: 10px 0 0 0;">180 Degrees Consulting MUJ</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 25px; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="color: #2d3748; font-size: 16px; line-height: 1.6;">Dear ${formData.name},</p>
              
              <p style="color: #4a5568; line-height: 1.6;">
                Thank you for contacting 180 Degrees Consulting MUJ. We have successfully received your message regarding "<strong>${formData.subject}</strong>" and appreciate your interest in our work.
              </p>
              
              <p style="color: #4a5568; line-height: 1.6;">
                Our team will review your inquiry and respond within <strong>24 hours</strong>. We look forward to discussing how we can work together to create positive change in our community.
              </p>
              
              <div style="background-color: #edf2f7; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #38b2ac;">
                <p style="margin: 0; color: #2d3748; font-weight: 500;">Your Message Summary:</p>
                <p style="margin: 5px 0 0 0; color: #4a5568; font-style: italic;">"${formData.message.substring(0, 150)}${formData.message.length > 150 ? '...' : ''}"</p>
              </div>
              
              <p style="color: #4a5568; line-height: 1.6;">
                In the meantime, feel free to explore our website to learn more about our consulting services, ongoing initiatives, and how you can get involved with our mission.
              </p>
              
              <p style="color: #2d3748; margin-top: 20px;">
                Best regards,<br>
                <strong>The 180 Degrees Consulting MUJ Team</strong>
              </p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e6fffa; border-radius: 8px; text-align: center; border: 1px solid #81e6d9;">
              <p style="margin: 0; font-size: 14px; color: #2d3748;">
                📍 <strong>Manipal University Jaipur</strong><br>
                Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza<br>
                Jaipur, Rajasthan 303007<br>
                📧 180dc@jaipur.manipal.edu | 📞 +91 141 999 4000
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form processed successfully",
        emailId: emailResponse.data?.id,
        confirmationEmailId: confirmationResponse.data?.id,
        submissionId: formData.submissionId
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to process contact form" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
