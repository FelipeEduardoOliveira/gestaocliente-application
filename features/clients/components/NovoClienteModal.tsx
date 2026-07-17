"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Modal from "@/components/Modal/Modal";
import { useForm } from "react-hook-form";
import { CreateClient, UpdateClient } from "../types/Client";
import { Select } from "@/components/Select";
import { useEffect } from "react";

interface IOptions {
  label: string;
  value: string;
}

interface Props {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onSave: (e: CreateClient) => void;
  statusOptions: IOptions[];
  client: UpdateClient | null;
}

export default function NovoClienteModal({
  open,
  onClose,
  onSave,
  loading,
  statusOptions,
  client,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClient>();

  useEffect(() => {
    if (client) {
      reset(client);
    } else {
      reset({
        companyName: "",
        email: "",
        phone: "",
        instagram: "",
        website: "",
        city: "",
        uf: "",
        description: "",
        methodAbord: "",
        status: "",
      });
    }
  }, [client, reset]);

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
            {client ? "Atualizar" : "Salvar"} cliente
          </Button>
        </div>
      }
    >
      <form id="cliente-form" onSubmit={handleSubmit(onSave)}>
        <div
          className="
            space-y-4
            px-6
            py-5
          "
        >
          <Input
            label="Nome da empresa"
            required
            error={errors.companyName?.message}
            {...register("companyName", {
              required: "Nome obrigatório",
              minLength: {
                value: 3,
                message: "Mínimo de 3 caracteres",
              },
            })}
          />

          <Input label="E-mail" normalize="email" {...register("email")} />

          <Select
            options={statusOptions}
            className=""
            error={errors.status?.message}
            {...register("status", {
              required: "Selecione um status",
            })}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Telefone"
              mask="cellphone"
              placeholder="(11) 90000-0000"
              {...register("phone")}
            />
            <Input
              label="Instagram"
              placeholder="@perfil"
              mask="instagram"
              {...register("instagram")}
            />
          </div>
          <Input
            label="Website"
            placeholder="https://..."
            normalize="website"
            {...register("website")}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input label="Cidade" placeholder="cidade" {...register("city")} />

            <Input label="UF" placeholder="SP" mask="uf" {...register("uf")} />
          </div>

          <Input label="Descrição" {...register("description")} />

          <Input label="Metodo abordagem" {...register("methodAbord")} />
        </div>
      </form>
    </Modal>
  );
}
