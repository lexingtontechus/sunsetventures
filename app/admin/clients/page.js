import { auth, currentUser } from "@clerk/nextjs/server";
import ListClients from "../components/listclients";
//import ListClients2 from "./components/listclients2";

export const metadata = {
  title: "Clients | Sunset Ventures",
};

export default async function Clients({ groupID }) {
  return (
    <main className="mx-auto justify-between p-8 mb-8">
      <h1 className="mb-4 text-5xl font-bold uppercase text-pretty text-center">
        Clients
      </h1>
      <div className="flex grow">
        <ListClients />
      </div>
    </main>
  );
}
