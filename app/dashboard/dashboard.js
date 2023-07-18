"use client";
import { useAuth } from "@clerk/nextjs";

const Dashboard = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  return;
  <section>
    <div className="relative py-8 mx-auto w-full">
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 max-h-350px px-4"></div>
        <div className="w-full xl:w-6/12 max-h-350px px-4"></div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
        <div className="w-full xl:w-4/12 px-4"></div>
      </div>
    </div>
  </section>;
};

export default Dashboard;
