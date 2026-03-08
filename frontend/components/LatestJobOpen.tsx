import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LatestJobOpen() {
  const jobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
    },
    {
      id: 2,
      title: "Social Media Assistant",
      company: "Netlify",
      location: "Paris, France",
    },
    {
      id: 3,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, USA",
    },
    {
      id: 4,
      title: "Brand Designer",
      company: "Maze",
      location: "San Francisco, USA",
    },
    {
      id: 5,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
    },
    {
      id: 6,
      title: "Interactive Developer",
      company: "Udacity",
      location: "Hamburg, Germany",
    },
    {
      id: 7,
      title: "HR Manager",
      company: "Packer",
      location: "Lucern, Switzerland",
    },
    {
      id: 8,
      title: "HR Manager",
      company: "Webflow",
      location: "Lucern, Switzerland",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-10">
      <Image
        src="/images/Pattern2.svg"
        alt="Background Image"
        width={877}
        height={1440}
        className="absolute -right-32 top-0 hidden h-auto max-w-none opacity-80 lg:block"
      />

      <div className="relative z-10 w-full px-6 pb-12 pt-12 md:px-16 lg:pb-16 lg:pt-16 xl:px-32">
        <div className="mb-8 flex w-full items-end justify-between lg:mb-10">
          <div
            className="text-3xl font-semibold leading-tight text-neutral-100 lg:text-5xl"
            style={{ fontFamily: "var(--font-clash-display)" }}
          >
            Latest <span className="text-accent-blue">jobs open</span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <div className="text-center font-semibold leading-6 text-primary">Show all jobs</div>
            <ArrowRight className="text-primary" />
          </div>
        </div>

        <div className="grid w-full gap-3 md:grid-cols-2 md:gap-4">
          {jobs.map((job) => (
            <div
              className="flex md:flex-row flex-col items-start gap-4 bg-white p-5 lg:p-6"
              key={job.id}
            >
              <Image
                src="/images/Dropbox.png"
                alt="Company Logo"
                width={52}
                height={52}
                className="size-12 shrink-0 object-contain lg:size-14"
              />
              <div className="flex min-w-0 flex-col gap-2">
                <div className="line-clamp-1 text-xl font-semibold leading-6 text-neutral-100">
                  {job.title}
                </div>

                <div className="inline-flex items-center gap-2 text-base leading-6 text-neutral-80">
                  <div className="line-clamp-1">{job.company}</div>
                  <div className="size-1 rounded-full bg-neutral-80" />
                  <div className="line-clamp-1">{job.location}</div>
                </div>

                <div className="inline-flex flex-wrap items-center gap-2">
                  <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-sm font-semibold leading-6 text-accent-green">
                    Full-Time
                  </div>
                  <div className="h-6 w-px bg-neutral-20" />
                  <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-accent-yellow outline-1 outline-accent-yellow/70">
                    Marketing
                  </div>
                  <div className="rounded-full px-3 py-1 text-sm font-semibold leading-6 text-primary outline-1 outline-primary/70">
                    Design
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
