import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";
import SmartFX from "../components/smartfx";
import { smartfxOne, smartfxTwo } from "../components/smartfxdata";

import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Loading from "../components/loading";
import ErrorMessage from "../components/errorMessage";

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
          <Navbar />
          <div
            id="profile"
            className="mx-auto text-trueZinc-700 dark:text-trueZinc-100 h-full"
          >
            <Image
              src={user.picture}
              width={25}
              height={25}
              alt={user.name}
              className="rounded-full"
            />
            <h2 className="">{user.name}</h2>
            <p className="">{user.email}</p>
          </div>
        </>
      )}
    </>
  );
}
export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
