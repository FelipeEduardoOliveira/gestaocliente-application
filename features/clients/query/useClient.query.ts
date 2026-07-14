import { useQuery } from "@tanstack/react-query";
import { getClients } from "../services/clients.service";

export function useClientsQuery() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
}
