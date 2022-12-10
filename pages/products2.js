import React from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import SEO from "../components/seo";

import Layout from "../layouts/layout";
import DashboardProducts from "../components/dashboard/products";


//function Dashboard() {

export default function Products2() {
  return (
    <>
      <SEO
        title="Products | Sunset Ventures"
        description="Dashboard Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <Layout>
        <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          {/* Header */}
          <DashboardProducts />
        </div>
      </Layout>
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
