import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-foreground outline-1 outline-offset-1 font-sans mx-auto px-6 py-16 md:px-16 xl:px-32">
      <div className="grid grid-cols-4 gap-12 lg:grid-cols-12 lg:flex lg:justify-between">
        <div className="col-span-4">
          <div className="mb-8 flex items-center gap-3">
            <Image src="/images/Frame 3.svg" alt="QuickHire Logo" width={30} height={30} />
            <div className="text-white text-2xl font-bold font-mono leading-9">QuickHire</div>
          </div>
          <p className="max-w-96 text-neutral-20 text-base font-normal leading-6">
            Great platform for the job seeker that passionate about startups. Find your dream job
            easier.
          </p>
        </div>

        <div className="col-span-2">
          <h3 className="mb-6 text-white text-lg font-semibold leading-7">About</h3>
          <ul className="space-y-4 text-neutral-20">
            <li className="text-base font-normal leading-6">Companies</li>
            <li className="text-base font-normal leading-6">Pricing</li>
            <li className="text-base font-normal leading-6">Terms</li>
            <li className="text-base font-normal leading-6">Advice</li>
            <li className="text-base font-normal leading-6">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="mb-6 text-white text-lg font-semibold leading-7">Resources</h3>
          <ul className="space-y-4 text-neutral-20">
            <li className="text-base font-normal leading-6">Help Docs</li>
            <li className="text-base font-normal leading-6">Guide</li>
            <li className="text-base font-normal leading-6">Updates</li>
            <li className="text-base font-normal leading-6">Contact Us</li>
          </ul>
        </div>

        <div className="col-span-4 ">
          <h3 className="mb-4 text-white text-lg font-semibold leading-7">Get job notifications</h3>
          <p className="mb-8 text-neutral-20 text-base font-normal leading-6 max-w-80">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch max-w-120">
            <div
              data-icon="False"
              data-state="Default"
              className="h-12 w-full px-4 bg-white outline-1 outline-offset-1px outline-neutral-20 flex items-center"
            >
              <input
                className="text-black text-base font-normal placeholder:text-neutral-40 leading-6"
                placeholder="Email Address"
              />
            </div>
            <button
              data-icon="No Icon"
              data-size="Medium"
              data-style="Filled"
              data-type="Primary"
              className="h-12 px-6 w-36 bg-primary text-white text-base font-bold leading-6 outline-1 outline-offset-1px outline-primary"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-10">
        <div className="flex flex-col gap-6 items-center sm:flex-row sm:items-center sm:justify-between">
          <div className="text-white opacity-50 text-base font-medium leading-6">
            © {new Date().getFullYear()} QuickHire. All rights reserved.{" "}
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="LinkedIn"
              className="size-8 rounded-full bg-white/10 text-white text-xs flex items-center justify-center"
            >
              <Image src="/images/linkedin.svg" alt="LinkedIn" width={12} height={12} />
            </button>
            <button
              aria-label="Twitter"
              className="size-8 rounded-full bg-white/10 text-white text-xs flex items-center justify-center"
            >
              <Image src="/images/twitter.svg" alt="Twitter" width={12} height={12} />
            </button>
            <button
              aria-label="Instagram"
              className="size-8 rounded-full bg-white/10 text-white text-xs flex items-center justify-center"
            >
              <Image src="/images/instagram.svg" alt="Instagram" width={12} height={12} />
            </button>
            <button
              aria-label="Dribbble"
              className="size-8 rounded-full bg-white/10 text-white text-xs flex items-center justify-center"
            >
              <Image src="/images/dribbble.svg" alt="Dribbble" width={12} height={12} />
            </button>
            <button
              aria-label="Facebook"
              className="size-8 rounded-full bg-white/10 text-white text-xs flex items-center justify-center"
            >
              <Image src="/images/facebook.svg" alt="Facebook" width={8} height={8} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
