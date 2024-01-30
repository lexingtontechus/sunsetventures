"use client";
import parse from "html-react-parser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useAuth, useSession, useUser } from "@clerk/nextjs";

export default function Portfolio() {
  const [subs, setSubs] = useState();
  const supabase = createClientComponentClient();
  const { userId } = useAuth();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase
        .from("user_subscriptions")
        .select("product_id, clerk_id,products(*)")
        .eq("clerk_id", userId); //user_2bT3vEA5eJl6YtkUL1Wa1urHkKt
      //,users(clerk_id, name)",

      //.eq("user_subscription.product_id", "prod_MtmS1sVroHTutu");
      setSubs(data);
    };

    getData();
  }, []);

  return (
    <div className="mx-auto">
      <div className="relative mt-8 px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div>{userId} Portfolio</div>
          <div>{JSON.stringify(subs, null, 2)}</div>
        </div>
      </div>
    </div>
  );
}
