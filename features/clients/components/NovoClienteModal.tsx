"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal/Modal";
import { SubmitEvent } from "react";

interface Props {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onSave: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function NovoClienteModal({
  open,
  onClose,
  onSave,
  loading,
}: Props) {
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

          <Button form="cliente-form" type="submit" loading={loading}>
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
          <Input label="Nome da empresa" name="companyName" required />

          <Input label="E-mail" normalize="email" name="email" />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Telefone"
              name="phone"
              mask="cellphone"
              placeholder="(11) 90000-0000"
            />
            <Input
              label="Instagram"
              name="instagram"
              placeholder="@perfil"
              mask="instagram"
            />
          </div>
          <Input
            label="Website"
            name="website"
            placeholder="https://..."
            normalize="website"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input label="Cidade" name="city" placeholder="cidade" />

            <Input label="UF" name="uf" placeholder="SP" mask="uf" />
          </div>

          <Input label="Descrição" name="description" />

          <Input label="Metodo abordagem" name="methodAbord" />
        </div>
      </form>
    </Modal>
  );
}
