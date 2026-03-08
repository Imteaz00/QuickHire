import Image from "next/image";

export default function Company() {
  return (
    <div className="w-full md:px-16 xl:px-32 px-6 py-12 bg-white inline-flex flex-col justify-start items-start gap-8 overflow-hidden">
      <div className="opacity-50 justify-start text-foreground text-lg font-normal leading-7">
        Companies we helped grow
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 justify-between gap-10 items-center">
        <Image
          src="images/amd-logo-1.svg"
          alt="AMD Logo"
          width={117}
          height={28}
          className="col-span-1"
        />
        <Image
          src="images/intel-3.svg"
          alt="Intel Logo"
          width={82}
          height={32}
          className="col-span-1"
        />
        <Image
          src="images/talkit 1.svg"
          alt="Talkit Logo"
          width={108}
          height={32}
          className="col-span-1"
        />
        <Image
          src="images/tesla-9 1.svg"
          alt="Tesla Logo"
          width={183}
          height={24}
          className="col-span-1"
        />
        <Image
          src="images/vodafone-2017-logo.svg"
          alt="Vodafone Logo"
          width={154}
          height={40}
          className="col-span-1"
        />
      </div>
    </div>
  );
}
