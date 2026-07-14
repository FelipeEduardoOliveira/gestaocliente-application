"use client";

import {
  ClientTable,
  FormClient,
  HeaderClient,
  useClient,
} from "@/features/clients";

export default function ContainerClients() {
  const { data, isLoading, statusOptions } = useClient();
  return (
    <main className="w-full">
      <HeaderClient />

      <FormClient statusOptions={statusOptions} />

      <ClientTable data={data} isLoading={isLoading} />
    </main>
  );
}
