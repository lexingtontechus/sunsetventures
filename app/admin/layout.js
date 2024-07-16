import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default function AdminLayout({ children, params }) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }
  return <div className="py-4 svg-dashboard bg-auto">{children}</div>;
}
