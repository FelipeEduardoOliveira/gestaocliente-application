import { ClientTable, FormClient, HeaderClient } from "@/features/clients";

export default function Clientes() {
  return (
    <main className="w-full">
      <HeaderClient />

      <FormClient />

      <ClientTable />
    </main>
  );
}
