"use client";
//import parse from "html-react-parser";
//import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
//import { createClient } from "@supabase/supabase-js";
import { createClient } from "../../utils/client";
//import { currentUser } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";

export default async function ListClients({ groupID }) {
  const [clients, setListClients] = useState();
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data: clients } = await supabase
        .from("vwidgetlistclients")
        .select()
        .order("groupname", { ascending: true });
      //.eq("clientgroupsid", groupID);
      //user_2bT3vEA5eJl6YtkUL1Wa1urHkKt
      //,users(clerk_id, name)",

      //.eq("user_subscription.product_id", "prod_MtmS1sVroHTutu");
      setListClients(clients);
    };

    getData();
  }, []);

  //const user = await currentUser();

  return (
    <div className="relative mt-8 px-4  mx-auto w-full">
      <div className="flex flex-wrap">
        {/* <div>{JSON.stringify(clients, null, 2)}</div>*/}
        {!clients ? (
          <p>No clients</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Product</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, id) => (
                  <tr key={client.id}>
                    <td>
                      {client.firstname} {client.lastname} <br />
                      <span className="text-xs">{client.email}</span>
                    </td>
                    <td>{client.groupname}</td>
                    <td> {client.productname}</td>
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
