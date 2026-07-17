import { api } from "@/lib/http/axios";
import { Client, CreateClient, UpdateClient } from "../types/Client";
import { ApiResponse } from "@/lib/api/types";

export async function getClients(): Promise<ApiResponse<Client[]>> {
  const response = await api.get("/client");

  return response.data;
}

export async function getClientById(id: string): Promise<ApiResponse<Client>> {
  const response = await api.get(`/client/${id}`);

  return response.data;
}

export async function createClient(
  data: CreateClient,
): Promise<ApiResponse<Client>> {
  const response = await api.post<ApiResponse<Client>>("/client", data);

  return response.data;
}

export async function updateClient({
  data,
  id,
}: {
  data: UpdateClient;
  id: string;
}): Promise<ApiResponse<Client>> {
  const url = `client/${id}`;
  const response = await api.patch<ApiResponse<Client>>(url, data);

  return response.data;
}
