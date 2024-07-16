import Link from "next/link";

import WidgetClientGroups from "./components/widgetclientgroups";
//import ListClients2 from "./components/listclients2";

export const metadata = {
  title: "Admin | Sunset Ventures",
};

export default async function Admin() {
  return (
    <main className="mx-auto justify-between p-8 mb-8">
      <h1 className="mb-4 text-5xl font-bold uppercase text-pretty text-center">
        Admin Dashboard
      </h1>
      <div className="flex flex-wrap p-8 mx-auto">
        <div className="flex grow">
          <h3 className="px-4 uppercase">
            <Link href="/clients">Groups</Link>
          </h3>

          <WidgetClientGroups />
        </div>
      </div>
    </main>
  );
}
