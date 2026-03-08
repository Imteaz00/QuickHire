import { JSX } from "react";

const categories: { [key: string]: JSX.Element } = {
  marketing: (
    <div className="px-4 py-1 bg-orange-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-yellow text-sm font-semibold leading-6">
        Marketing
      </div>
    </div>
  ),
  design: (
    <div className="px-4 py-1 bg-emerald-300/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-green text-sm font-semibold leading-6">Design</div>
    </div>
  ),
  business: (
    <div className="px-4 py-1 bg-indigo-600/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-primary text-sm font-semibold leading-6">Business</div>
    </div>
  ),
  technology: (
    <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-red text-sm font-semibold leading-6">
        Technology
      </div>
    </div>
  ),
  sales: (
    <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-red text-sm font-semibold leading-6">Sales</div>
    </div>
  ),
  finance: (
    <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-red text-sm font-semibold leading-6">Finance</div>
    </div>
  ),
  engineering: (
    <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-red text-sm font-semibold leading-6">
        Engineering
      </div>
    </div>
  ),
  "human resources": (
    <div className="px-4 py-1 bg-red-400/10 rounded-full flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-black">
      <div className="justify-start text-accent-red text-sm font-semibold leading-6">HR</div>
    </div>
  ),
};

export default categories;
