"use client";
import React, { useState } from "react";
import { useAuth, WithUser, useUser } from "@clerk/nextjs";

function AddSubscription({ subscriptions, setSubscriptions }) {
  const { getToken, userId } = useAuth();
  const [newSubscriptions, setNewSubscriptions] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newSubscriptions === "") {
      return;
    }

    const supabaseAccessToken = await getToken({
      template: "sunsetventures",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data } = await supabase
      .from("subscriptions")
      .insert({ product: newSubscriptions, clerk_id: userId })
      .select();

    setSubscriptions([...subscriptions, data[0]]);
    setNewSubscriptions("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewSubscriptions(e.target.value)}
        value={newSubscriptions}
      />
      &nbsp;<div className="btn">Subscribe</div>
    </form>
  );
}
