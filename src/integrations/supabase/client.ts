// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://owqvejbpigekgshicmlt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cXZlamJwaWdla2dzaGljbWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzE1ODEsImV4cCI6MjA2NTUwNzU4MX0.86KopPnzRN1ZswOmSM1H3mOLiIFpBYpv9mAu4Yjja94";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);