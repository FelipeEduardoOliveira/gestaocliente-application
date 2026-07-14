"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "../hooks/useAuth.hook";

export default function FormLogin() {
  const { handleSubmit } = useAuth();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Login" placeholder="E-mail" type="email" name="email" />

      <Input
        label="Senha"
        placeholder="********"
        type="password"
        name="password"
      />

      <Button type="submit">Entrar</Button>
    </form>
  );
}
