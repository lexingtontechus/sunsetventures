"use client";
//import DashboardMenu from "./components/dashboardmenu";
"use client";
import { useAuth, WithUser, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

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
