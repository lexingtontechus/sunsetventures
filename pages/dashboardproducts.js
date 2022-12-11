import React from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import SEO from "../components/seo";

import LayoutDashboard from "../layouts/layoutDashboard";
import Pricing from "../components/dashboard/pricing";
import { getActiveProductsWithPrices } from "../utils/supabase-client";

//function Dashboard() {

export default function Products({ products }) {
  return (
    <>
      <SEO
        title="Products | Sunset Ventures"
        description="Dashboard Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <LayoutDashboard>
        <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          {/* Header */}
          <Pricing products={products} />
        </div>
      </LayoutDashboard>
    </>
  );
}

export async function getStaticProps() {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
  
