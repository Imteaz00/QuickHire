import fetchAllJobs from "@/actions/fetchAllJobs";
import categories from "@/components/CategoryBadge";
import Image from "next/image";
import Link from "next/link";

export default async function Jobs({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string; search?: string; location?: string }>;
}) {
  const { category, sort, search, location } = await searchParams;
  const jobs = await fetchAllJobs({ category, sort, search, location });
  return (
    <div className="mt-6 w-full flex flex-col justify-start items-start gap-6">
      {jobs.map((job) => (
        <Link
          href={`/jobs/${job.id}`}
          className="flex-1 p-6 w-full bg-white outline-1 outline-offset-1 outline-neutral-20 inline-flex flex-col justify-start items-start gap-4 overflow-hidden"
          key={job.id}
        >
          <div className="self-stretch inline-flex justify-between items-start">
            <Image
              className="size-12"
              src="/images/Dropbox.png"
              height={52}
              width={52}
              alt="Company Logo"
            />
            <div className="px-3 py-1 outline-1 outline-offset-1 outline-primary flex justify-center items-center gap-2">
              <div className="text-center justify-start text-primary font-normal leading-6">
                Full Time
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-0.5">
            <div className="justify-start text-neutral-100 text-lg font-semibold leading-7">
              {job.title}
            </div>
            <div className="inline-flex justify-center items-center gap-2">
              <div className="justify-start text-neutral-80 text-base font-normal leading-6">
                {job.company}
              </div>
              <div className="size-1 opacity-30 bg-neutral-80 rounded-full" />
              <div className="justify-start text-neutral-80 text-base font-normal leading-6 line-clamp-1">
                {job.location}
              </div>
            </div>
          </div>
          <div className="w-full justify-start text-slate-500 text-base font-normal font-mono leading-6 line-clamp-2">
            {job.description}
          </div>
          <div className="inline-flex justify-start items-start gap-2">
            {job.category.map((category) => (
              <div key={category}>{categories[category]}</div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
