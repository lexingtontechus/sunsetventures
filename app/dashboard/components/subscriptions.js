"use client";

import { useState, useEffect } from "react";
import { useAuth, useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Subscriptions() {
  const { user } = useUser();
  const { userId, sessionId, getToken } = useAuth();
  const [subs, setSubs] = useState(null);
  return <SubscriptionList subs={subs} setSubs={setSubs} />;
}

const SubscriptionList = ({ subs, setSubs }) => {
  const { session } = useSession();
  const [loadingSubs, setLoadingSubs] = useState(true);
  const { userId } = useAuth();
  // on first load, fetch and set subs
  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        setLoadingSubs(true);
        // const supabaseAccessToken = await session.getToken({          template: "sunsetventures",        });
        //        const supabase = await supabaseClient(supabaseAccessToken);
        const supabase = createClientComponentClient();
        const { data } = await supabase
          .from("user_subscriptions")
          .select("product_id, clerk_id,products(*)")
          .eq("clerk_id", userId);

        setSubs(data);
        //alert(subs);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingSubs(false);
      }
    };
    loadSubscriptions();
  }, []);

  // if loading, just show loading message
  if (loadingSubs) {
    return (
      <div className="text-2xl font-semibold text-center uppercase p-8">
        Loading{" "}
        <span className="loading loading-spinner loading-sm text-gold"></span>
        <span className="loading loading-spinner loading-sm text-gold"></span>
        <span className="loading loading-spinner loading-sm text-gold"></span>
      </div>
    );
  }

  // display user subscription
  return (
    <>
      {subs?.length > 0 ? (
        <>
          {subs.map((sub, index) => (
            <div className="stat max-w-64">
              <div key={index} className="stat-figure">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img
                      src={sub.products.image}
                      alt="Sunset Ventures"
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="stat-title font-bold text-primary text-pretty">
                {sub.products.name}
              </div>
              <div className="stat-desc text-pretty">
                {sub.products.tagline}
              </div>
              <div className="stat-desc text-pretty">
                {sub.products.description}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-2xl font-semibold text-accent text-center">
          No active subs.
        </div>
      )}
    </>
  );
};
