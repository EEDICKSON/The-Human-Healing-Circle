import { createClient } from "@supabase/supabase-js";

// Read configuration environment properties securely from the local runtime instance
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Initialize and export a single reusable authenticated client channel
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
