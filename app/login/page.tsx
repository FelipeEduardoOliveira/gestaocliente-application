import { ContainerLogin, FormLogin, HeaderLogin } from "@/features/auth";

export default function Login() {
  return (
    <ContainerLogin>
      <HeaderLogin />

      <FormLogin />
    </ContainerLogin>
  );
}
