import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Profile({ session }) {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [full_name, setFullname] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="form-widget align-center flex-grow h-full p-6 overflow-auto">
        <div className="p-8">
          {avatar_url ? (
            <Image
              src={avatar_url}
              alt="Avatar"
              className="rounded-full mx-auto"
              height={100}
              width={100}
            />
          ) : (
            <div className="avatar no-image" />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            value={full_name}
            disabled
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={session.user.email}
            disabled
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="align-center mb-4">
          <button
            className="button primary block bg-trueZinc-900 rounded-md p-2 w-full text-trueZinc-100"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div className="mb-4">
          <button
            className="button block bg-trueZinc-900 rounded-md p-2 text-trueZinc-100"
            //onClick={() => supabase.auth.signOut()}
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/");
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
