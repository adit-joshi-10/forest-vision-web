
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
    console.log("Newsletter subscription request received");
    
    const { email }: SubscribeRequest = await req.json();
    console.log("Email received:", email);
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      console.log("Invalid email format:", email);
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

    // Use the project's URL and service role key directly
    const supabaseUrl = "https://owqvejbpigekgshicmlt.supabase.co";
    const supabaseKey = Deno.env.get('SERVICE_ROLE_KEY');
    
    console.log("Environment check:", {
      hasKey: !!supabaseKey,
      url: supabaseUrl,
      keyLength: supabaseKey ? supabaseKey.length : 0
    });

    if (!supabaseKey) {
      console.error("Missing SERVICE_ROLE_KEY environment variable");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Server configuration error. Missing service role key." 
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

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);
    console.log("Supabase client initialized");

    console.log("Attempting to insert email:", email);

    // Insert email into subscribers table
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email }])
      .select();

    if (error) {
      console.error("Database error details:", {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        fullError: error
      });
      
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
          error: `Database error: ${error.message}` 
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
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: `Server error: ${error.message}` 
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
