"use client";

import {
  ClientTable,
  FormClient,
  HeaderClient,
  useClient,
} from "@/features/clients";
import { useModal } from "../hooks/useModal.hook";
import NovoClienteModal from "./NovoClienteModal";

export default function ContainerClients() {
  const { data, isLoading, statusOptions } = useClient();
  const {
    handleSubmit,
    onClose,
    open,
    onNewClient,
    loading,
    updateCient,
    setUpdateCient,
  } = useModal();
  return (
    <main className="w-full">
      <HeaderClient onNewClient={onNewClient} />

      <FormClient statusOptions={statusOptions} />

      <ClientTable
        data={data}
        isLoading={isLoading}
        setUpdateCient={setUpdateCient}
        onNewClient={onNewClient}
      />

      <NovoClienteModal
        onSave={handleSubmit}
        open={open}
        onClose={onClose}
        loading={loading}
        statusOptions={statusOptions}
        client={updateCient}
      />
    </main>
  );
}
