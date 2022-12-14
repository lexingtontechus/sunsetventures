import { useRouter } from "next/router";
import { useState } from "react";

import { postData } from "../../utils/helpers";
import { getStripe } from "../../utils/stripe-client";
import { useUser } from "../../utils/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing({ products }) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] = useState("month");
  const [priceIdLoading, setPriceIdLoading] = useState();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push("/signin");
    }
    if (subscription) {
      return router.push("/dashboardproducts");
    }

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert(error?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products)
    return (
      <section className="bg-black">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-6xl font-extrabold text-trueZinc-100 sm:text-center sm:text-6xl">
            No subscription pricing plans found. Create them in your{" "}
            <a
              className="text-truePink-500 underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-trueZinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
          <div className="relative self-center mt-6 bg-trueZinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-trueZinc-800">
            <button
              onClick={() => setBillingInterval("month")}
              type="button"
              className={`${
                billingInterval === "month"
                  ? "relative w-1/2 bg-trueZinc-700 border-trueZinc-800 shadow-sm text-white"
                  : "ml-0.5 relative w-1/2 border border-transparent text-trueZinc-400"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingInterval("year")}
              type="button"
              className={`${
                billingInterval === "year"
                  ? "relative w-1/2 bg-trueZinc-700 border-trueZinc-800 shadow-sm text-white"
                  : "ml-0.5 relative w-1/2 border border-transparent text-trueZinc-400"
              } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Yearly billing
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: price.currency,
              minimumFractionDigits: 0,
            }).format((price?.unit_amount || 0) / 100);
            return (
              <div
                key={product.id}
                className={classNames(
                  "rounded-lg shadow-sm divide-y divide-trueZinc-600 bg-trueZinc-900",
                  {
                    "border border-pink-500": subscription
                      ? product.name === subscription?.prices?.products?.name
                      : product.name === "Freelancer",
                  }
                )}
              >
                <div className="p-6">
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-trueZinc-300">
                    {product.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-5xl font-extrabold text-trueZinc-100">
                      {priceString}
                    </span>
                    <span className="text-base font-medium text-trueZinc-100">
                      /{billingInterval}
                    </span>
                  </p>
                  <button
                    variant="slim"
                    type="button"
                    disabled={isLoading}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price)}
                    className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-trueZinc-900"
                  >
                    {product.name === subscription?.prices?.products?.name
                      ? "Manage"
                      : "Subscribe"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
