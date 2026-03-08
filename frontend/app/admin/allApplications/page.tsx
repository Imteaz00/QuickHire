import fetchApplications from "@/actions/fetchApplications";
import Link from "next/link";

export default async function allApplications() {
  const applications = await fetchApplications();
  return (
    <section id="applications" className="rounded-xl border border-neutral-20 bg-white p-6">
      <Link
        href="/admin"
        className="mb-4 inline-flex items-center rounded-md border border-neutral-30 px-3 py-1.5 text-sm font-semibold text-neutral-90"
      >
        Go back
      </Link>
      <h2 className="text-xl font-semibold text-neutral-100">Applications</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-195 border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-20 text-neutral-80">
              <th className="py-2 pr-4">Candidate</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Job</th>
              <th className="py-2 pr-4">Cover Letter</th>
              <th className="py-2 pr-4">Resume</th>
              <th className="py-2 pr-4">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td className="py-3 text-neutral-80" colSpan={6}>
                  No applications yet.
                </td>
              </tr>
            ) : (
              applications.map((application) => (
                <tr key={application.id} className="border-b border-neutral-20/70">
                  <td className="py-3 pr-4">{application.name}</td>
                  <td className="py-3 pr-4">{application.email}</td>
                  <td className="py-3 pr-4">
                    {application.job
                      ? `${application.job.title} (${application.job.company})`
                      : "Job unavailable"}
                  </td>
                  <td className="py-3 pr-4 max-w-100">{application.coverNote}</td>
                  <td className="py-3 pr-4">
                    <a
                      href={application.resumeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary underline"
                    >
                      Open Resume
                    </a>
                  </td>
                  <td className="py-3 pr-4">
                    {new Date(application.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
