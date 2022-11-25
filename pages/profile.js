import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";

import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";

//import Dashboard from "../layouts/layoutDashboard.js";
//import Navbar from "../components/navbar";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar";
import Footer from "../components/dashboard/footer";

//import CardLineChart from "../components/dashboard/cards/cardLineChart.js";
//import CardBarChart from "../components/dashboard/cards/cardBarChart.js";
//import CardPageVisits from "../components/dashboard/cards/cardPageVisits.js";
//import CardSocialTraffic from "../components/dashboard/cards/cardSocialTraffic.js";

function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <SEO
            title="Profile | Sunset Ventures"
            description="Profile Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
          />
          <Sidebar />
          <div className="relative md:ml-64 h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
            <Navbar />
            {/* Header */}
            {/*<HeaderStats />*/}
            <div className="relative mt-8 px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                  <div>
                    <Image
                      src={user.picture}
                      alt={user.name}
                      height={100}
                      width={100}
                      className="rounded-full"
                    />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                  {/*<CardBarChart />*/}Chart 2
                </div>
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                  {/*<CardPageVisits />*/}Chart 3
                </div>
                <div className="w-full xl:w-4/12 px-4">
                  {/*<CardSocialTraffic />*/}Chart 4
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}
//Dashboard.layout = Dashboard;

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
