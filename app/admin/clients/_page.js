"use client";
import { createClient } from "@supabase/supabase-js";
import { useRef, useState } from "react";

function createClerkSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: {
        // Get the Supabase token with a custom fetch method
        fetch: async (url, options = {}) => {
          const clerkToken = await window.Clerk.session?.getToken({
            template: "sunsetventures",
          });

          // Construct fetch headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          // Now call the default fetch
          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    },
  );
}

const supabase = createClerkSupabaseClient();

export default function Supabase() {
  const [clients, setClients] = useState();
  const listClients = async () => {
    // Fetches all clients scoped to the user
    // Replace "clients" with your table name
    const { data, error } = await client.from("clients").select();
    if (!error) setClients(data);
  };

  const inputRef = useRef(null);
  const sendClient = async () => {
    if (!inputRef.current?.value) return;
    await supabase.from("clients").insert({
      // Replace content with whatever field you want
      content: inputRef.current?.value,
    });
  };

  return (
    <main className="container p-8">
      <div className="flex gap-4">
        <input
          onSubmit={sendClient}
          style={{ color: "black" }}
          type="text"
          ref={inputRef}
        />
        <button onClick={sendClient} className="btn btn-primary">
          Send Client
        </button>
        <button onClick={listClients} className="btn btn-secondary">
          Fetch clients
        </button>
      </div>
      <h2>Clients</h2>
      {!clients ? (
        <p>No clients</p>
      ) : (
        <ul>
          {clients.map((client) => (
            <li key={client.id}>{client.content}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
