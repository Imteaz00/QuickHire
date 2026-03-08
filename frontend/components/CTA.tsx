import Image from "next/image";

export default function CTA() {
  return (
    <div className="w-full md:px-16 xl:px-32 md:py-12 bg-white overflow-hidden">
      <div className="px-4 xl:px-20 pt-20 h-160 md:h-104 bg-primary relative flex flex-col md:flex-row justify-start md:justify-between items-center md:items-end gap-6">
        <div className="w-15 h-35 -top-15 left-20 absolute origin-top-left rotate-60 bg-white z-8" />
        <div className="w-25 h-55 -bottom-28 -right-26 absolute origin-top-left rotate-60 bg-white z-8" />
        <div className="inline-flex flex-col justify-start text-center md:text-left md:items-start gap-6 md:self-start">
          <div
            className="text-white text-3xl lg:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-clash-display)" }}
          >
            Start posting jobs today
          </div>
          <div className="text-white font-medium leading-6">Start posting jobs for only $10.</div>
          <div
            data-icon="No Icon"
            data-size="Medium"
            data-style="Filled"
            data-type="Primary"
            className="w-full md:w-45 px-6 py-3 bg-white inline-flex justify-center items-center gap-2.5"
          >
            <div className="text-center text-primary text-base font-bold leading-6">
              Sign Up For Free
            </div>
          </div>
        </div>
        <Image
          src="/images/cta.png"
          alt="CTA Image"
          width={564}
          height={346}
          className="z-10 h-full overflow-hidden"
        />
      </div>
    </div>
  );
}
