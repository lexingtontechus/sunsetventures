"use client";
//import parse from "html-react-parser";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { createClient } from "@supabase/supabase-js";
import { createClient } from "../../utils/client";
//import { currentUser } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

export default async function vWidgetClientGroups() {
  const [widgets, setvWidgets] = useState();
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data: widgets } = await supabase
        .from("vwidgetclientgroups")
        .select();
      //  .groupBy("clientgroupid,productid");
      //.eq("clerk_id", userId); //user_2bT3vEA5eJl6YtkUL1Wa1urHkKt
      //,users(clerk_id, name)",

      //.eq("user_subscription.product_id", "prod_MtmS1sVroHTutu");
      setvWidgets(widgets);
    };

    getData();
  }, []);

  //const user = await currentUser();

  return (
    <div className="relative mt-8 px-4  mx-auto w-full">
      <div className="flex flex-wrap">
        {/* <div>{JSON.stringify(clients, null, 2)}</div>*/}
        {!widgets ? (
          <p>No clients</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Product</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                {widgets.map((widget, id) => (
                  <tr key={widget.id}>
                    <td>
                      {widget.groupname} <br />
                      <span className="text-xs">{client.email}</span>
                    </td>
                    <td>Sunset Group</td>
                    <td>Sunset Product </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
