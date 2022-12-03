/* eslint-disable */
{
  /*Auth0
export default function Login() {
  return <a href="/api/auth/login">Login</a>;
}
*/
}

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

import SEO from "../components/seo";
import Layout from "../layouts/layout";

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user)
    return (
      <Auth
        redirectTo="/dashboard"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={["google", "github", "linkedin"]}
        socialLayout="horizontal"
      />
    );

  return (
    <>
      <SEO
        title="Login | Sunset Ventures"
        description="Login Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <Layout>
        <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
        <p>user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>client-side data fetching with RLS</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </>
  );
};

export default LoginPage;
