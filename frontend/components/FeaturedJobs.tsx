import { ArrowRight } from "lucide-react";
import { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

export default function FeaturedJobs() {
  const categories: { [key: string]: JSX.Element } = {
    marketing: (
      <div className="px-4 py-1 bg-orange-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-yellow text-sm font-semibold leading-6">
          Marketing
        </div>
      </div>
    ),
    design: (
      <div className="px-4 py-1 bg-emerald-300/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-green text-sm font-semibold leading-6">
          Design
        </div>
      </div>
    ),
    business: (
      <div className="px-4 py-1 bg-indigo-600/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-primary text-sm font-semibold leading-6">Business</div>
      </div>
    ),
    technology: (
      <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-red text-sm font-semibold leading-6">
          Technology
        </div>
      </div>
    ),
    sales: (
      <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-red text-sm font-semibold leading-6">Sales</div>
      </div>
    ),
    finance: (
      <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-red text-sm font-semibold leading-6">Finance</div>
      </div>
    ),
    engineering: (
      <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-red text-sm font-semibold leading-6">
          Engineering
        </div>
      </div>
    ),
    humanResources: (
      <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2">
        <div className="justify-start text-accent-red text-sm font-semibold leading-6">HR</div>
      </div>
    ),
  };

  const jobs = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma S ...",
      categories: ["marketing", "design"],
    },
    {
      id: 2,
      title: "Sales Associate",
      company: "TechCorp",
      location: "San Francisco, CA",
      description: "TechCorp is looking for a Sales Associate to join our dynamic team.",
      categories: ["sales", "business"],
    },
    {
      id: 3,
      title: "Financial Analyst",
      company: "FinancePros",
      location: "New York, NY",
      description: "FinancePros is seeking a Financial Analyst to provide insights and analysis.",
      categories: ["finance", "technology"],
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Innovatech",
      location: "Austin, TX",
      description: "Innovatech is hiring a Software Engineer to develop cutting-edge applications.",
      categories: ["engineering", "technology"],
    },
    {
      id: 5,
      title: "HR Manager",
      company: "PeopleFirst",
      location: "Chicago, IL",
      description:
        "PeopleFirst is looking for an HR Manager to oversee our human resources operations.",
      categories: ["humanResources", "business"],
    },
    {
      id: 6,
      title: "Product Designer",
      company: "DesignHub",
      location: "Seattle, WA",
      description: "DesignHub is seeking a Product Designer to create user-centric designs.",
      categories: ["design", "technology"],
    },
    {
      id: 7,
      title: "Marketing Specialist",
      company: "MarketGenius",
      location: "Los Angeles, CA",
      description:
        "MarketGenius is hiring a Marketing Specialist to develop and execute marketing strategies.",
      categories: ["marketing", "business"],
    },
  ];

  return (
    <div className="px-4 md:px-16 xl:px-32 pb-16 bg-white inline-flex flex-col justify-start items-start gap-4 xl:gap-12 overflow-hidden">
      <div className="w-full py-4 md:py-0 inline-flex justify-between items-end">
        <div
          className="justify-start text-neutral-100 text-3xl lg:text-5xl font-semibold leading-[52.80px]"
          style={{ fontFamily: "var(--font-clash-display)" }}
        >
          Featured <span className="text-accent-blue">jobs</span>
        </div>
        <div className="hidden md:flex md:justify-end md:items-center md:gap-4">
          <div className="text-center justify-start text-primary font-semibold leading-6">
            Show all jobs
          </div>
          <ArrowRight className="text-primary" />
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 md:justify-start md:items-start gap-8 ">
        {jobs.map((job) => (
          <div
            className="flex-1 p-6 h-72 bg-white outline-1 outline-offset-1 outline-neutral-20 inline-flex flex-col justify-start items-start gap-4 overflow-hidden"
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
              {job.categories.map((category) => (
                <div key={category}>{categories[category]}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Carousel className="w-screen">
          <CarouselContent>
            {jobs.map((job, index) => (
              <CarouselItem key={index}>
                <div
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
                    {job.categories.map((category) => (
                      <div key={category}>{categories[category]}</div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="md:hidden flex justify-start items-center gap-4">
          <div className="text-center justify-start text-primary font-semibold leading-6">
            Show all jobs
          </div>
          <ArrowRight className="text-primary" />
        </div>
      </div>
    </div>
  );
}
