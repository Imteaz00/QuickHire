import deleteJob from "@/actions/deleteJob";
import fetchAllJobs from "@/actions/fetchAllJobs";
import Link from "next/link";

export default async function AllPosts() {
  const jobs = await fetchAllJobs({});

  return (
    <section className="rounded-xl border border-neutral-20 bg-white p-6">
      <Link
        href="/admin"
        className="mb-4 inline-flex items-center rounded-md border border-neutral-30 px-3 py-1.5 text-sm font-semibold text-neutral-90"
      >
        Go back
      </Link>
      <h2 className="text-xl font-semibold text-neutral-100">Delete Job Post</h2>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {jobs.length === 0 ? (
          <p className="text-sm text-neutral-80">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col justify-between gap-3 rounded-md border border-neutral-20 p-3 md:flex-row md:items-center"
            >
              <div>
                <p className="font-medium text-neutral-100">{job.title}</p>
                <p className="text-sm text-neutral-80">
                  {job.company} - {job.location}
                </p>
              </div>
              <form action={deleteJob}>
                <input type="hidden" name="jobId" value={job.id} />
                <button
                  type="submit"
                  className="rounded-md border border-red-300 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
