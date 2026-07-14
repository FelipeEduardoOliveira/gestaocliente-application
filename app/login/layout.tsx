import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema - Login",
  description: "Sistema de clientes",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      {children}
    </main>
  );
}
