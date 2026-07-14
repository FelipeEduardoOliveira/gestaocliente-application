export default function ContainerLogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      {children}
    </main>
  );
}
