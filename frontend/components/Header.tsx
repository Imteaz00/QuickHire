import { ChevronDown, MapPin, Search } from "lucide-react";
import Image from "next/image";
import NavBar from "./NavBar";
import SearchJobs from "./SearchJobs";

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
            <SearchJobs />
            <div className="opacity-70 justify-center text-gray-800 text-base font-normal leading-6">
              Popular : UI Designer, UX Researcher, Android, Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
