import React from "react";
//import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
//import Loading from "../components/loading";
//import ErrorMessage from "../components/errorMessage";

import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
//import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { User } from "@supabase/supabase-js";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";

import LayoutDashboard from "../layouts/layoutDashboard";

import HeaderStats from "../components/dashboard/headerStats";

import CardLineChart from "../components/dashboard/cards/cardLineChart.js";
import CardBarChart from "../components/dashboard/cards/cardBarChart.js";
import CardPageVisits from "../components/dashboard/cards/cardPageVisits.js";
import CardSocialTraffic from "../components/dashboard/cards/cardSocialTraffic.js";

//function Dashboard() {

export default function Dashboard() {
  return (
    <>
      <SEO
        title="Dashboard | Sunset Ventures"
        description="Dashboard Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <LayoutDashboard>
        <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          {/* Header */}
          <HeaderStats />
          <div className="relative py-8 mx-auto w-full bg-trueZinc-900">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-6/12 mb-12 xl:mb-0 max-h-350px px-4">
                <CardLineChart />
              </div>
              <div className="w-full xl:w-6/12 max-h-350px px-4">
                <CardBarChart />
              </div>
            </div>
            <div className="flex flex-wrap mt-8">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardPageVisits />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardSocialTraffic />
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

{
  /*export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});*/
}
