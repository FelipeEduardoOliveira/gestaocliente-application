"use client";

import { showToast } from "@/lib/toast";
import { useClientsQuery } from "../query/useClient.query";
import { useEffect } from "react";

export const useClient = () => {
  const statusOptions = [
    { label: "Todos", value: "" },
    { label: "Cadastrado", value: "cadastrado" },
    { label: "Em contato", value: "em_contato" },
    { label: "Recusado", value: "recusado" },
    { label: "Em teste", value: "em_teste" },
    { label: "Finalizado", value: "finalizado" },
  ];

  const { data, isLoading, isError } = useClientsQuery();

  useEffect(() => {
    if (data?.success) {
      showToast.info(data.message);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      showToast.error("Erro ao carregar clientes");
    }
  }, [isError]);

  return {
    statusOptions,
    data: data?.data ?? [],
    message: data?.message ?? "",
    success: data?.success,
    isLoading,
  };
};
