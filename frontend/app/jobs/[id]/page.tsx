import fetchJobById from "@/actions/fetchJobById";
import QuickApply from "@/components/QuickApply";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await fetchJobById(String(id));

  return {
    title: `${job.company} | QuickHire`,
    description: job.description,
  };
}

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = await fetchJobById(String(id));

  if (!job) {
    notFound();
  }

  return (
    <section className="relative mt-6 overflow-hidden rounded-2xl border border-neutral-20 bg-linear-to-br from-neutral-10 via-white to-primary-light/40 p-4 md:p-8">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-accent-green/15 blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="rounded-2xl border border-neutral-20/80 bg-white/95 p-6 shadow-lg backdrop-blur-sm md:p-8">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <span aria-hidden="true">&larr;</span>
            Back to jobs
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Full Time
            </span>
            {job.category?.map((category) => (
              <span
                key={category}
                className="rounded-full bg-neutral-10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-80"
              >
                {category}
              </span>
            ))}{" "}
            <span className="rounded-full bg-accent-yellow/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-100">
              2 days ago
            </span>
          </div>

          <h1 className="mt-4 font-serif text-4xl leading-tight text-neutral-100 md:text-5xl">
            {job.title}
          </h1>
          <p className="mt-2 text-lg text-neutral-80">
            {job.company} - {job.location}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl bg-neutral-10 p-4 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-60">Compensation</p>
              <p className="mt-1 text-lg font-semibold text-neutral-100">$55k - $70k</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-60">Role Type</p>
              <p className="mt-1 text-lg font-semibold text-neutral-100">Full Time</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-neutral-100">Details</h2>
            <p className="mt-3 leading-7 text-neutral-80">{job.description}</p>
          </div>
        </article>
        <QuickApply jobId={job.id} />
      </div>
    </section>
  );
}
