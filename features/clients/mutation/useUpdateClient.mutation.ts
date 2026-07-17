import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateClient } from "../services/clients.service";
import { showToast } from "@/lib/toast";

export function useUpdateClientMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateClient,
    onSuccess(response) {
      showToast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
    },
    onError(error: any) {
      showToast.error(
        error.response.data.message ?? "Erro ao atualizar cliente",
      );
    },
  });
}
