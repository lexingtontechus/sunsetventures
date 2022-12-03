import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

import Image from "next/image";
import SEO from "../components/seo";
import LayoutDashboard from "../layouts/layoutDashboard";

export default function Profile({ user }) {
  return (
        <>
          <SEO
            title="Profile | Sunset Ventures"
            description="Profile Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
          />
          <LayoutDashboard>
          <div className="relative h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
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
                
                </div>
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                
                </div>
                <div className="w-full xl:w-4/12 px-4">
                
                </div>
              </div>
            </div>
          </div>
        </LayoutDashboard>
        </>
  )
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx)
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  }
}