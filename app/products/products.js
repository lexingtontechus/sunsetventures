"use client";
import Script from "next/script";

export default function ProductsPage() {
  return (
    <div className="mx-auto bg-base-100">
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id="prctbl_1M9yv8IQNi3MgoAVW2WfKZRx"
        publishable-key="pk_test_TNvPJAXriTdXRRoODg7FWSKV"
        className="bg-base-100"
      ></stripe-pricing-table>
    </div>
  );
}
