"use client";
import { useAuth } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};
export default function Products() {
  return (
    <>
        <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          {/* Header */}
          
        </div>
    </>
  );
}
