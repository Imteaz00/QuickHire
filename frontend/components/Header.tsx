import { ChevronDown, MapPin, Search } from "lucide-react";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="w-full min-h-199 relative bg-neutral-10 overflow-hidden">
      <Image
        src="/images/Pattern.svg"
        alt=""
        height={794}
        width={860}
        className="absolute right-10 top-15 max-w-none scale-115"
      />
      <Image
        className="absolute max-w-none right-15 -bottom-1 hidden lg:block"
        src="/images/guy-gesture.png"
        alt="Guy Gesture"
        width={501}
        height={707}
      />
      <div className="hidden lg:block w-60 h-120 absolute -bottom-70 -right-60 origin-top-left rotate-64 bg-white" />
      <div className="px-6 md:px-16 xl:px-32 relative">
        <NavBar />
        <div className="w-full inline-flex flex-col justify-start items-start pt-8 lg:pt-20 gap-6">
          <div>
            <div
              className="max-w-80 lg:max-w-110 justify-start text-neutral-100 lg:text-7xl text-5xl font-semibold lg:leading-[79.20px]"
              style={{ fontFamily: "var(--font-clash-display)" }}
            >
              Discover more than <span className="text-accent-blue">5000+ Jobs</span>
            </div>
            <Image
              src="/images/vector.svg"
              alt="Vector"
              height={32}
              width={455}
              className="w-80 lg:w-120"
            />
          </div>
          <div className="max-w-100 lg:max-w-130 opacity-70 justify-start text-neutral-80 text-lg lg:text-xl font-normal leading-8">
            Great platform for the job seeker that searching for new career heights and passionate
            about startups.
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full lg:w-220 p-4 bg-white shadow flex flex-col lg:flex-row gap-4">
              <div className="flex-1 self-stretch px-4 flex justify-start items-center gap-4">
                <Search className="text-neutral-100" />
                <div className="flex-1 self-stretch pt-5 inline-flex flex-col justify-between items-start">
                  <input
                    type="text"
                    name="jobTitle"
                    aria-label="Job title or keyword"
                    className="opacity-50 justify-start placeholder:text-neutral-60 text-base font-normal leading-6"
                    placeholder="Job title or keyword"
                  />
                  <div className="self-stretch h-px bg-neutral-20" />
                </div>
              </div>
              <div className="flex-1 self-stretch pl-2 pr-6 flex justify-start items-center gap-4">
                <MapPin className="text-neutral-80" />
                <div className="flex-1 self-stretch pt-5 inline-flex flex-col justify-between items-start">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="opacity-90 justify-start text-neutral-80 text-base font-normal leading-6">
                      Florence, Italy
                    </div>
                    <ChevronDown className="text-neutral-60" />
                  </div>
                  <div className="self-stretch h-px bg-neutral-20" />
                </div>
              </div>
              <div className="w-full lg:w-52 self-stretch px-7 py-3.5 bg-primary flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-white text-lg font-bold leading-7">
                  Search my job
                </div>
              </div>
            </div>
            <div className="opacity-70 justify-center text-gray-800 text-base font-normal leading-6">
              Popular : UI Designer, UX Researcher, Android, Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
