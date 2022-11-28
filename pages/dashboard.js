import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";

import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";

import LayoutDashboard from "../layouts/layoutDashboard";
//import Navbar from "../components/navbar";
//import Navbar from "../components/dashboard/navbar";
//import Sidebar from "../components/dashboard/sidebar";
//import Footer from "../components/dashboard/footer";

import HeaderStats from "../components/dashboard/headerStats";

import CardLineChart from "../components/dashboard/cards/cardLineChart.js";
import CardBarChart from "../components/dashboard/cards/cardBarChart.js";
import CardPageVisits from "../components/dashboard/cards/cardPageVisits.js";
import CardSocialTraffic from "../components/dashboard/cards/cardSocialTraffic.js";

//function Dashboard() {
export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <SEO
            title="Dashboard | Sunset Ventures"
            description="Dashboard Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
          />
          <LayoutDashboard>
            <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100 bg-trueZinc-900">
              {/* Header */}
<HeaderStats />
              <div className="relative mt-8 px-8 mx-auto w-full -m-24">
                <div className="flex flex-wrap">
                  <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart />
                  </div>
                  <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4">
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
      )}
    </>
  );
}
Dashboard.layout = LayoutDashboard;
export const getServerSideProps = withPageAuthRequired();

{
  /*export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});*/
}
