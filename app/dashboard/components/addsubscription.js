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

export default function AddSubscription({ subscriptions, setSubscriptions }) {
  const { session } = useSession();
  const [newSubscription, setNewSubscriptions] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newSubscription === "") {
      return;
    }

    const supabaseAccessToken = await session.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data } = await supabase.from("signups").insert({
      product: "prod_MtmS1sVroHTutu", //newSubscription,
      //uuid: "user_2bT3vEA5eJl6YtkUL1Wa1urHkKt", //userId,
      clerk_id: "user_2bEpqPuA5MtFsYLnTLdPLGWD8Tf", //userId,
      //created_at: new Date().toISOString(),
    });
    //.select();

    setSubscriptions([...subscriptions, data[0]]);
    setNewSubscriptions("");
  };

  return (
    <form onSubmit={handleSubmit} className="justify-between">
      <div className="flex flex-wrap gap-4 content-center justify-center">
        <div>
          <select
            className="text-sm h-8 px-2 bg-blue-800"
            name="product"
            id="product"
            onChange={(e) => setNewSubscriptions(e.target.value)}
            value={newSubscription}
          >
            <option defaultValue="" disabled="">
              Select a product
            </option>
            <option value="prod_MtmS1sVroHTutu">
              Vesper - Start Your Portfolio today
            </option>
            <option value="prod_MtnHoMoZZsSBGu">
              Crescent - Supercharge Your Portfolio
            </option>
            <option value="prod_MtmTcCTM4XLaKH">
              Aurora - Diversified Your Portfolio
            </option>
            <option value="prod_MtnIrsc0irdxz3">
              Apollo = Performance Portfolio
            </option>
          </select>
        </div>
        <div className="px-4">
          <button type="submit" className="btn btn-accent btn-sm uppercase">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}
