import { useSession } from "next-auth/react"
import PanelTable from "./ui/panel/panelTable";
import { auth, signOut } from "@/app/auth";
import { fetchClients } from "./lib/data";
import { Session } from "next-auth";

const Panel = async () => {
    const session = await auth();
    const clients = await fetchClients(session?.user?.id);

  return (
    <div className="flex p-5">
      <PanelTable clients={clients}/>
    </div>
  );
};

export default Panel;
