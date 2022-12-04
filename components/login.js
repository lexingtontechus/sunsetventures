import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../utils/useUser";

import SEO from "../components/seo";
import Layout from "../layouts/layout";
import Logo from "../components/logo";
import { Transition } from "@headlessui/react";

const LoginPage = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  return (
    <Auth
      redirectTo="/dashboard"
      theme="dark"
      appearance={{ theme: ThemeSupa }}
      supabaseClient={supabaseClient}
      providers={["google", "github", "linkedin"]}
      socialLayout="horizontal"
      magicLink={true}
    />
  );
};

export default LoginPage;
