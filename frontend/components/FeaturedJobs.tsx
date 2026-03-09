import { ArrowRight } from "lucide-react";
import { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
import categories from "./CategoryBadge";
import fetchAllJobs from "@/actions/fetchAllJobs";

export default async function FeaturedJobs() {
  const jobs = await fetchAllJobs({});
  const featuredJobs = [...jobs].sort(() => Math.random() - 0.5).slice(0, 8);

  return (
    <div className="px-4 md:px-16 xl:px-32 pb-16 bg-white inline-flex flex-col justify-start items-start gap-4 xl:gap-12 overflow-hidden">
      <div className="w-full py-4 md:py-0 inline-flex justify-between items-end">
        <div
          className="justify-start text-neutral-100 text-3xl lg:text-5xl font-semibold leading-[52.80px]"
          style={{ fontFamily: "var(--font-clash-display)" }}
        >
          Featured <span className="text-accent-blue">jobs</span>
        </div>
        <Link href="/jobs" className="hidden md:flex md:justify-end md:items-center md:gap-4">
          <div className="text-center justify-start text-primary font-semibold leading-6">
            Show all jobs
          </div>
          <ArrowRight className="text-primary" />
        </Link>
      </div>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 md:justify-start md:items-start gap-8 ">
        {featuredJobs.map((job) => (
          <Link
            href={`/jobs/${job.id}`}
            className="flex-1 p-6 h-72 bg-white outline-1 outline-offset-1 outline-neutral-20 inline-flex flex-col justify-start items-start gap-4 overflow-hidden group hover:bg-primary transition-colors duration-300"
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
              <div className="px-3 py-1 outline-1 outline-offset-1 outline-primary flex justify-center items-center gap-2 group-hover:bg-white">
                <div className="text-center justify-start text-primary font-normal leading-6">
                  Full Time
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5">
              <div className="justify-start text-neutral-100 text-lg font-semibold leading-7 group-hover:text-white">
                {job.title}
              </div>
              <div className="inline-flex justify-center items-center gap-2">
                <div className="justify-start text-neutral-80 text-base font-normal leading-6 group-hover:text-white">
                  {job.company}
                </div>
                <div className="size-1 opacity-30 bg-neutral-80 rounded-full" />
                <div className="justify-start text-neutral-80 text-base font-normal leading-6 line-clamp-1 group-hover:text-white">
                  {job.location}
                </div>
              </div>
            </div>
            <div className="w-full justify-start text-slate-500 text-base font-normal font-mono leading-6 line-clamp-2 group-hover:text-white">
              {job.description}
            </div>
            <div className="inline-flex justify-start items-start gap-2">
              {job.category?.map((category) => (
                <div key={category}>{categories[category] ?? null}</div>
              ))}{" "}
            </div>
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <Carousel className="w-screen">
          <CarouselContent>
            {featuredJobs.map((job) => (
              <CarouselItem key={job.id}>
                <Link
                  href={`/jobs/${job.id}`}
                  className="flex-1 p-6 h-72 bg-white outline-1 outline-offset-1 outline-neutral-20 inline-flex flex-col justify-start items-start gap-4"
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Link href="/jobs" className="md:hidden flex justify-start items-center gap-4">
          <div className="text-center justify-start text-primary font-semibold leading-6">
            Show all jobs
          </div>
          <ArrowRight className="text-primary" />
        </Link>
      </div>
    </div>
  );
}
