
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Please enter a valid email address" 
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert email into subscribers table
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select();

    if (error) {
      console.error("Database error:", error);
      
      // Handle duplicate email case
      if (error.code === '23505') {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: "This email is already subscribed to our newsletter" 
          }),
          {
            status: 409,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Failed to subscribe. Please try again." 
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    console.log("Newsletter subscription successful:", data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully subscribed to our newsletter!" 
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
    console.error("Error in subscribe-newsletter function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "An unexpected error occurred. Please try again." 
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
