import { SubmitEvent } from "react";
import { Client } from "../types/Client";

export const useClient = () => {
  const clients: Client[] = [
    {
      companyName: "Design ATM",
      email: "contato@atm.com",
      cpf: "01010101010",
      cnpj: "01010101010101",
      phone: "(11) 99999-9999",
      facebook: "",
      instagram: "",
      website: "https://designatm.com",
      status: "Cadastrado",
    },
  ];

  const statusOptions = [
    { label: "Todos", value: "" },
    { label: "Cadastrado", value: "cadastrado" },
    { label: "Em contato", value: "em_contato" },
    { label: "Recusado", value: "recusado" },
    { label: "Em teste", value: "em_teste" },
    { label: "Finalizado", value: "finalizado" },
  ];

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    console.log({
      email: form.get("email"),
      password: form.get("password"),
    });
  };

  return {
    statusOptions,
    data: clients,
  };
};
