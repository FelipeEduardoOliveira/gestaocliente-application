"use client";

import { Button } from "@/components/Button";
import { Plus } from "lucide-react";
import NovoClienteModal from "./NovoClienteModal";
import { useModal } from "../hooks/useModal.hook";

export default function HeaderClient() {
  const { handleSubmit, onClose, open, onNewClient } = useModal();

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

      <NovoClienteModal onSave={handleSubmit} open={open} onClose={onClose} />
    </div>
  );
}
