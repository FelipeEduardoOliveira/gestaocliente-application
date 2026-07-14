import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema - Gestão",
  description: "Sistema de clientes",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  items-center justify-center p-8 bg-slate-100">
      {children}
    </main>
  );
}