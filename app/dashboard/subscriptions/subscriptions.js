"use client";

import { useState, useEffect } from "react";
import { useAuth, useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
//import SubscriptionForm from "./subscriptionform";
const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default function Subscriptions() {
  const { user } = useUser();
  const { userId, sessionId } = useAuth();
  const [subscriptions, setSubscriptions] = useState(null);
  return (
    <div className="min-h-screen svg-dashboard">
      {/*<div className="hero-overlay"></div>*/}
      <div className="max-w-md text-center mx-auto p-8">
        <h1 className="my-4 text-5xl font-bold uppercase text-center">
          Sunset Ventures {user.firstName} Subscription
        </h1>
        <p>
          {sessionId}
          <br />
          {userId}
        </p>
        <section className="container mx-auto p-8">
          {/*<AddProductForm products={products} setproducts={setproducts} />*/}
          {subscriptions ? (
            <>
              <h3 className="text-center font-semibold">
                Select A Product To Subscribe
              </h3>
              <div className="max-w-2xl mx-auto justify-between my-4">
                <p>Add Subs</p>
              </div>
            </>
          ) : (
            <>
              <SubscriptionList
                subscriptions={subscriptions}
                setSubscriptions={setSubscriptions}
              />
              <p>Subs List</p>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

const SubscriptionList = ({ subscriptions, setSubscriptions }) => {
  const { session } = useSession();
  const [loadingSubscriptions, setLoadingSubscriptions] = useState(true);
  const { userId } = useAuth();
  // on first load, fetch and set subscriptions
  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        setLoadingSubscriptions(true);
        const supabaseAccessToken = await session.getToken({
          template: "sunsetventures",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: subscriptions } = await supabase
          .from("user_subscription")
          .select("user_subscription.*,products.*");
        //.eq("user_subscription.product_id", "products.id");
        //.eq("user_subscription.clerk_id", "user_2bT3vEA5eJl6YtkUL1Wa1urHkKt");
        // ("user_subscription.product_id", "products.id"),
        //);
        //.order("orderby", { ascending: true })        //.eq("active", true);
        setSubscriptions(subscriptions);
        //alert(subscriptions);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingSubscriptions(false);
      }
    };
    loadSubscriptions(subscriptions);
  }, [subscriptions]);

  // if loading, just show basic message
  if (loadingSubscriptions) {
    return (
      <div className="text-2xl font-semibold text-center m-8 uppercase">
        Loading{" "}
        <span className="loading loading-spinner loading-sm text-gold"></span>
        <span className="loading loading-spinner loading-sm text-gold"></span>
        <span className="loading loading-spinner loading-sm text-gold"></span>
      </div>
    );
  }

  // display all the products
  return (
    <div className="mb-8">
      {subscriptions?.length > 0 ? (
        <div className="flex flex-wrap flex-grow gap-4 content-center justify-center mb-8">
          {subscriptions.map((subscription, index) => (
            <div key={index} className="grow card w-64 bg-base-200 shadow-xl">
              <figure className="image-full h-32">
                <img
                  src={product.image}
                  alt="Sunset Ventures"
                  className="w-full"
                />
              </figure>
              <div className="card-body">
                <div className="card-title text-2xl font-bold text-accent">
                  {subscription.product}
                </div>
                <div className="text-sm">{product.description}</div>
                <ul className="text-xs list-disc list-inside">
                  <li>Risk factor - {product.metadata.risk}</li>
                  <li>Drawdown factor - {product.metadata.drawdown}</li>
                  <li>Leverage factor - {product.metadata.leverage}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl font-semibold text-accent text-center">
          No active subscriptions.
        </div>
      )}
    </div>
  );
};
