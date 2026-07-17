"use client";

import { showToast } from "@/lib/toast";
import { useClientsQuery } from "../query/useClient.query";
import { useEffect } from "react";
import { statusOptions } from "@/utils/statusOption";

export const useClient = () => {
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
