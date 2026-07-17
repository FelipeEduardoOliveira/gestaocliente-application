import { useState } from "react";
import { useCreateClientMutation } from "../mutation/useCreateClient.mutation";
import { CreateClient, UpdateClient } from "../types/Client";
import { statusOptions } from "@/utils/statusOption";
import { useUpdateClientMutation } from "../mutation/useUpdateClient.mutation";
import { sanitizeUpdatePayload } from "@/utils/sanitizeUpdatePayload";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [updateCient, setUpdateCient] = useState<UpdateClient | null>(null);

  const createClient = useCreateClientMutation();
  const UpdateClient = useUpdateClientMutation();

  const loading = createClient.isPending;

  function handleSubmit(data: CreateClient) {
    const payload = sanitizeUpdatePayload(data) as CreateClient;

    if (updateCient && updateCient?.id) {
      UpdateClient.mutate(
        { data: payload, id: updateCient?.id },
        {
          onSuccess() {
            onClose();
          },
        },
      );
    } else {
      createClient.mutate(payload, {
        onSuccess() {
          onClose();
        },
      });
    }
  }

  function onClose() {
    setUpdateCient(null);
    setOpenModal(false);
  }
  function onNewClient() {
    setOpenModal(true);
  }

  return {
    handleSubmit,
    onClose,
    open: openModal,
    onNewClient,
    loading,
    statusOptions,
    updateCient,
    setUpdateCient,
  };
};
