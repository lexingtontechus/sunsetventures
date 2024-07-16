"use client";
//import parse from "html-react-parser";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { createClient } from "@supabase/supabase-js";
//import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "../../utils/client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default async function vWidgetClientGroups() {
  const [widgets, setWidgets] = useState();
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data: widgets } = await supabase
        //.from("vwidgetclientgroups")
        .from("vwidgetclientgroups")
        .select("*");
      //.eq("clerk_id", userId); //user_2bT3vEA5eJl6YtkUL1Wa1urHkKt
      //,users(clerk_id, name)",

      //.eq("user_subscription.product_id", "prod_MtmS1sVroHTutu");
      setWidgets(widgets);
    };

    getData();
  }, []);
  //const groupedByData = Map.groupBy(widget, (member) => member.client);
  //const user = await currentUser();

  return (
    <div className="relative mt-8 px-4  mx-auto w-full">
      <div className="flex flex-wrap">
        {/* <div>{JSON.stringify(clients, null, 2)}</div>*/}
        {!widgets ? (
          <p>No clients</p>
        ) : (
          <>
            {widgets.map((widget, id) => (
              <div
                className="stats stats-horizontal md:text-sm shadow gap-4 m-4 max-w-[250px] grow"
                key={widget.id}
              >
                <div className="stat place-items-center">
                  <div className="stat-title text-primary">
                    <Link href={`/admin/clients/${widget.groupid}`}>
                      {widget.groupname}
                    </Link>
                  </div>
                  <div className="stat-value text-accent">{widget.clients}</div>
                  <div className="stat-desc"></div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
