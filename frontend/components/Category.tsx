import fetchCatCount from "@/actions/fetchCatCount";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CodeXml,
  Megaphone,
  Monitor,
  PencilRuler,
  Users,
} from "lucide-react";
import Link from "next/link";

export default async function Category() {
  const catCount = await fetchCatCount();
  const categories = [
    {
      id: 1,
      name: "Design",
      jobCount: catCount.find((c) => c.category === "design")?.count || 0,
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Sales",
      jobCount: catCount.find((c) => c.category === "sales")?.count || 0,
      icon: ChartNoAxesCombined,
    },
    {
      id: 3,
      name: "Marketing",
      jobCount: catCount.find((c) => c.category === "marketing")?.count || 0,
      icon: Megaphone,
    },
    {
      id: 4,
      name: "Finance",
      jobCount: catCount.find((c) => c.category === "finance")?.count || 0,
      icon: Banknote,
    },
    {
      id: 5,
      name: "Technology",
      jobCount: catCount.find((c) => c.category === "technology")?.count || 0,
      icon: Monitor,
    },
    {
      id: 6,
      name: "Engineering",
      jobCount: catCount.find((c) => c.category === "engineering")?.count || 0,
      icon: CodeXml,
    },
    {
      id: 7,
      name: "Business",
      jobCount: catCount.find((c) => c.category === "business")?.count || 0,
      icon: BriefcaseBusiness,
    },
    {
      id: 8,
      name: "Human Resources",
      jobCount: catCount.find((c) => c.category === "human resources")?.count || 0,
      icon: Users,
    },
  ];
  return (
    <div className="w-full px-6 pt-4 pb-1 md:px-16 xl:px-32 lg:pt-16 bg-white inline-flex flex-col justify-start items-start gap-4 lg:gap-12">
      <div className="self-stretch inline-flex justify-between items-end">
        <div
          className="justify-start text-neutral-100 text-3xl lg:text-5xl font-semibold  leading-[52.80px]"
          style={{ fontFamily: "var(--font-clash-display)" }}
        >
          Explore by <span className="text-accent-blue">category</span>
        </div>
        <Link href="/jobs" className="hidden md:flex justify-end items-center gap-4">
          <div className="text-center text-primary text-base font-semibold leading-6">
            Show all jobs
          </div>
          <ArrowRight className="text-primary" />
        </Link>
      </div>
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 "
        style={{ fontFamily: "var(--font-clash-display)" }}
      >
        {categories.map((category) => (
          <Link
            href={`/jobs?category=${category.name.toLowerCase()}`}
            className="w-full lg:p-8 p-4 bg-white outline  outline-offset-1px outline-zinc-200 inline-flex lg:flex-col  justify-start items-start gap-8 group hover:bg-primary transition-colors duration-300"
            key={category.id}
          >
            <category.icon className="lg:size-12 size-10 text-primary group-hover:text-white self-center lg:self-auto" />
            <div className="flex-1 flex flex-col justify-center items-start lg:gap-3 gap-1">
              <div className="w-52 justify-start text-neutral-100 lg:text-2xl text-xl font-semibold leading-7 group-hover:text-white">
                {category.name}
              </div>
              <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-start">
                <div className="text-neutral-60 lg:text-lg font-normal font-sans leading-7 group-hover:text-white">
                  {category.jobCount} jobs available
                </div>
                <ArrowRight className="text-neutral-100 group-hover:text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/jobs" className="pt-4 pb-10 md:hidden inline-flex gap-4">
        <div className="text-center text-primary text-base font-semibold leading-6">
          Show all jobs
        </div>
        <ArrowRight className="text-primary" />
      </Link>
    </div>
  );
}
