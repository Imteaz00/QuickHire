import AdminJobForm from "@/components/AdminJobForm";
import Link from "next/link";

export default async function AdminPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8">
      <section className="rounded-xl border border-neutral-20 bg-white p-6">
        <h1 className="text-2xl font-semibold text-neutral-100">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-80">
          Add new job posts, remove existing posts, and view candidate applications.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href="admin/allposts"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            View all posts
          </Link>
          <Link
            href="admin/allApplications"
            className="rounded-md border border-neutral-30 px-4 py-2 text-sm font-semibold text-neutral-90"
          >
            View all applications
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-neutral-20 bg-white p-6">
        <h2 className="text-xl font-semibold text-neutral-100">Add Job Post</h2>
        <AdminJobForm />
      </section>
    </main>
  );
}
