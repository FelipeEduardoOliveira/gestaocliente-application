import { SubmitEvent, useState } from "react";
import { useCreateClientMutation } from "../mutation/useCreateClient.mutation";
import { CreateClient } from "../types/Client";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const createClient = useCreateClientMutation();

  const loading = createClient.isPending;

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: CreateClient = {
      companyName: String(formData.get("companyName")),
      status: "Cadastrado",
    };

    const optionalFields = [
      "email",
      "cpf",
      "cnpj",
      "phone",
      "facebook",
      "instagram",
      "website",
      "city",
      "uf",
      "description",
      "methodAbord",
    ] as const;

    optionalFields.forEach((field) => {
      const value = formData.get(field);

      if (value) {
        data[field] = String(value);
      }
    });

    createClient.mutate(data, {
      onSuccess() {
        onClose();
      },
    });
  }

  function onClose() {
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
  };
};
