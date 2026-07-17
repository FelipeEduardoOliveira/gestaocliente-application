"use client";

import { Button } from "@/components/Button";
import { Plus } from "lucide-react";

interface IHeaderClient {
  onNewClient: () => void;
}

export default function HeaderClient({ onNewClient }: IHeaderClient) {
  return (
    <div className="flex justify-between">
      <div>
        <h1>Gestão de Clientes</h1>
        <span>Boa tarde, Felipe !</span>
      </div>
      <div>
        <Button onClick={onNewClient}>
          <Plus size={18} />
          Novo Cliente
        </Button>
      </div>
    </div>
  );
}
