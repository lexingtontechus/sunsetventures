import Link from "next/link";
import { useState } from "react";

import { useUser } from "../../utils/useUser";
import { postData } from "../../utils/helpers";

import { withPageAuth } from "@supabase/auth-helpers-nextjs";

function Card({ title, description, footer, children }) {
  return (
    <div className="border border-zinc-700	max-w-3xl w-full p rounded-md m-auto my-8">
      <div className="px-5 py-4">
        <h3 className="text-2xl mb-1 font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="border-t border-zinc-700 bg-zinc-900 p-4 text-zinc-500 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/signin" });

export default function Account({ user }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert(error.message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <section className="mb-32">
      <div className="max-w-6xl mx-auto pt-8 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-trueZinc-700 dark:text-trueZinc-100 sm:text-center sm:text-6xl uppercase">
            Portfolio
          </h1>
          <p className="mt-5 text-xl text-trueZinc-700 dark:text-trueZinc-100 sm:text-center sm:text-2xl max-w-2xl m-auto">
            We partnered with Stripe for a simplified billing.
          </p>
        </div>
      </div>
      <div className="p-4">
        <Card
          title="Your Plan"
          description={
            subscription
              ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
              : ""
          }
          footer={
            <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center">
              <div className="pb-4 sm:pb-0 text-center">
                Manage your subscription.
              </div>
              <button
                variant="slim"
                loading={loading}
                disabled={loading || !subscription}
                onClick={redirectToCustomerPortal}
                className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-trueZinc-100 text-center hover:bg-zinc-500 rounded-half border-2 border-trueZinc-50"
              >
                Open Stripe Portal
              </button>
            </div>
          }
        >
          <div className="text-xl mt-8 mb-4 font-semibold">
            {isLoading ? (
              <div className="h-12 mb-6 text-sm">
                <svg
                  class="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Loading Subscription
              </div>
            ) : subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Link
                href="/products"
                className="m-2 p-2 rounded-md border-2 border-trueZinc-100 bg-trueZinc-900 text-trueZinc-100 font-bold text-sm"
              >
                Purchase a Product
              </Link>
            )}
          </div>
        </Card>
        <Card
          title="Your Name"
          description="Please enter your full name, or a display name you are comfortable with."
          className="text-trueZinc-700 dak:text-trueZinc-100"
          footer={<p>Please use 64 characters at maximum.</p>}
        >
          <div className="text-xl mt-8 mb-4 font-semibold">
            {userDetails ? (
              `${
                userDetails.full_name ??
                `${userDetails.first_name} ${userDetails.last_name}`
              }`
            ) : (
              <div className="h-8 mb-6">
                <svg
                  class="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Loading
              </div>
            )}
          </div>
        </Card>
        <Card
          title="Your Email"
          description="Please enter the email address you want to use to login."
          footer={<p>We will email you to verify the change.</p>}
        >
          <p className="text-xl mt-8 mb-4 font-semibold">
            {user ? user.email : undefined}
          </p>
        </Card>
      </div>
    </section>
  );
}
