import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "../services/clients.service";
import { showToast } from "@/lib/toast";

export function useCreateClientMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createClient,
    onSuccess(response) {
      showToast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
    onError(error: any) {
      showToast.error(error.response.data.message ?? "Erro ao criar cliente");
    },
  });
}
