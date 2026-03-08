import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <nav className="w-full py-6 inline-flex justify-between items-center">
      <div className="self-stretch flex justify-center items-center gap-12">
        <div className="flex gap-4">
          <Image src="images/Frame 3.svg" alt="QuickHire Logo" width={32} height={32} />
          <div className="justify-start text-neutral-100 text-2xl font-extrabold font-mono leading-9">
            QuickHire
          </div>
        </div>
        <div className="hidden self-stretch lg:flex justify-center items-center gap-4">
          <div className="inline-flex flex-col justify-start items-start gap-6">
            <div className="justify-start text-neutral-80 text-base font-medium leading-6">
              Find Jobs
            </div>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-6">
            <div className="justify-start text-neutral-80 text-base font-medium leading-6">
              Browse Companies
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden h-20 lg:flex justify-center items-center gap-4">
        <div className="px-6 rounded-sm flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-primary text-base font-bold leading-6">
            Login
          </div>
        </div>
        <div className="w-12 h-0 rotate-90 outline-1 outline-offset-[-0.50px] outline-neutral-20"></div>
        <div className="px-6 py-3 bg-primary flex justify-center items-center gap-2.5">
          <div className="text-center justify-start text-white text-base font-bold leading-6">
            Sign Up
          </div>
        </div>
      </div>
    </nav>
  );
}
