"use client";

import { Pencil } from "lucide-react";
import { Column, Table } from "../../../components/Table";
import { Client } from "@/features/clients";
import { IClientTable } from "../types/ClientTable";

const statusColors: Record<string, string> = {
  Cadastrado: "bg-slate-100 text-slate-700",
  "Em contato": "bg-blue-100 text-blue-700",
  Recusado: "bg-red-100 text-red-700",
  "Em teste": "bg-yellow-100 text-yellow-700",
  Finalizado: "bg-green-100 text-green-700",
};

export default function ClientTable({ data, isLoading }: IClientTable) {
  const columns: Column<Client>[] = [
    {
      key: "companyName",
      title: "Empresa",
    },
    {
      key: "email",
      title: "E-mail",
    },
    {
      key: "phone",
      title: "Telefone",
    },
    {
      key: "instagram",
      title: "Instagram",
    },
    {
      key: "website",
      title: "Website",
    },
    {
      key: "city",
      title: "Endereco",
      render: (client) => (
        <span>
          {client.city} - {client.uf}
        </span>
      ),
    },
    {
      key: "description",
      title: "Descrição",
    },
    {
      key: "methodAbord",
      title: "Abordagem",
    },
    {
      key: "status",
      title: "Status",
      render: (client) => (
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[client.status]}`}
        >
          {client.status}
        </span>
      ),
    },
    {
      key: "actions",
      title: "Ações",
      align: "right",
      render: (client) => (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => console.log({ client })}
            className="rounded-lg p-2 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Pencil size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      emptyMessage={isLoading ? "Carregando..." : "Nenhum registo encontrado"}
    />
  );
}
