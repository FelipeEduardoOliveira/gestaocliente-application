"use client";

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Search } from "lucide-react";
import { IFormClient } from "../types/FormClient";

export default function FormClient({ statusOptions }: IFormClient) {
  return (
    <div>
      <form className="flex flex-col rounded-2xl bg-white p-8 shadow-lg gap-4 my-6">
        <div className="bg-amber-100 p-2 rounded-md">
          <span className="text-sm font-medium text-amber-800">
            ⚠️ Os filtros estão desabilitados temporariamente
          </span>
        </div>

        <div className="flex gap-4">
          <Input
            disabled
            icon={<Search size={18} />}
            placeholder="Buscar por empresa, e-mail, CPF ou CNPJ..."
            name="company"
          />
          <Select disabled options={statusOptions} className="" />
          {/* <Button type="submit">Limpar filtros</Button> */}
        </div>
      </form>
    </div>
  );
}
