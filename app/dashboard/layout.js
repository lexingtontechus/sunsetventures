"use client";
//import DashboardMenu from "./components/dashboardmenu";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import {
  useAuth,
  useSession,
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

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

export default function DashboardLayout({ children, params }) {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    //return null;
    redirect("/");
  }
  return <>{children}</>;
}
{
  /*
  import { auth, currentUser } from "@clerk/nextjs/server";
<div className="mx-auto text-center">{user?.firstName}</div>
<div className="mx-auto">{user?.id}</div>

  const { orgPermissions } = auth();
  const user = await currentUser();
 */
}
