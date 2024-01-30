"use client";
import { useAuth, WithUser, useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import AccountStats from "./components/accountstats";
import Subscriptions from "./components/subscriptions";
const Dashboard = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    //return null;
    redirect("/");
  }

  return (
    <div className="min-h-screen mx-auto justify-between svg-dashboard p-8 mb-8">
      <h1 className="mb-4 text-5xl font-bold uppercase text-pretty text-center">
        Sunset Ventures {user.firstName} Dashboard
      </h1>
      <div className="flex flex-wrap px-8 mx-auto">
        <div className="mx-auto text-center">
          <AccountStats />
        </div>
        <div className="mx-auto">
          <Subscriptions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
