import { useState, useEffect } from "react";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";
import SEO from "../components/seo";
import LayoutDashboard from "../layouts/layoutDashboard";

import Profile from "../components/dashboard/profile";

const ProfilePage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      <SEO
        title="Profile | Sunset Ventures"
        description="Profile Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <LayoutDashboard>
        <div className="relative h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          <div className="relative mt-8 px-4 md:px-10 mx-auto w-full mb-24">
            <div className="text-xl font-bold uppercase text-center mb-8">
              Update Your Profile
            </div>
            <div className="flex flex-wrap content-center items-center justify-center min-h-[250px] sm:h-[600px]">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                {!session ? (
                  <Auth
                    redirectTo="/dashboard"
                    theme="dark"
                    appearance={{
                      theme: ThemeSupa,
                      className: {
                        label:
                          "text-sm text-trueZinc-700 dark:text-trueZinc-100",
                      },

                      variables: {
                        default: {
                          colors: {
                            brand: "#18181b",
                            brandAccent: "#71717a",
                            brandButtonBackground: "#18181b",
                            brandButtonText: "#f4f4f5",
                            defaultButtonBackground: "#18181b",
                            defaultButtonBackgroundHover: "#71717a",
                          },
                        },
                      },
                    }}
                    supabaseClient={supabase}
                    providers={["google", "linkedin"]}
                    socialLayout="horizontal"
                    magicLink={true}
                  />
                ) : (
                  <Profile session={session} />
                )}
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </>
  );
};
export default ProfilePage;
{
  /*
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
*/
}
