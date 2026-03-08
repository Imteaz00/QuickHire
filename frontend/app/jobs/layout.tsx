import NavBar from "@/components/NavBar";

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-6 md:px-16 xl:px-32">
      <NavBar />
      {children}
    </main>
  );
}
