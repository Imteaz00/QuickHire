import NavBar from "@/components/NavBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-10 p-6 md:px-16 xl:px-32">
      <NavBar />
      {children}
    </div>
  );
}
