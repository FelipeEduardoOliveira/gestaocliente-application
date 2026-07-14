"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal/Modal";
import { SubmitEvent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function NovoClienteModal({ open, onClose, onSave }: Props) {
  return (
    <Modal
      open={open}
      title="Novo cliente"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-4">
          <Button
            onClick={onClose}
            className="
              bg-slate-800
              border
              hover:bg-slate-700  
            "
          >
            Cancelar
          </Button>

          <Button form="cliente-form" type="submit">
            Salvar cliente
          </Button>
        </div>
      }
    >
      <form id="cliente-form" onSubmit={onSave}>
        <div
          className="
            space-y-4
            px-6
            py-5
          "
        >
          <Input label="Nome da empresa" name="empresa" required />

          <Input label="E-mail" name="email" required />

          <div className="grid grid-cols-2 gap-4">
            <Input label="CPF" name="cpf" placeholder="000.000.000-00" />

            <Input label="CNPJ" name="cnpj" placeholder="00.000.000/0000-00" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Telefone"
              name="telefone"
              placeholder="(11) 90000-0000"
            />

            <Input label="Website" name="website" placeholder="https://..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Instagram" name="instagram" placeholder="@perfil" />

            <Input
              label="Facebook"
              name="facebook"
              placeholder="facebook.com/..."
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
