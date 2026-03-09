import fetchLocations from "@/actions/fetchLocations";
import { MapPin, Search } from "lucide-react";

export default async function SearchJobs() {
  let locations: string[] = [];
  try {
    locations = await fetchLocations();
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    // Fallback to empty array - form still usable with "All locations"
  }
  return (
    <form
      action="/jobs"
      method="get"
      className="w-full lg:w-220 p-4 bg-white shadow flex flex-col lg:flex-row gap-4"
    >
      <div className="flex-1 self-stretch px-4 flex justify-start items-center gap-4">
        <Search className="text-neutral-100" />
        <div className="flex-1 self-stretch pt-5 inline-flex flex-col justify-between items-start">
          <input
            type="text"
            name="search"
            aria-label="Job title or keyword"
            className="placeholder:opacity-50 justify-start placeholder:text-neutral-60 text-base font-normal leading-6"
            placeholder="Job title or keyword"
          />
          <div className="self-stretch h-px bg-neutral-20" />
        </div>
      </div>
      <div className="flex-1 self-stretch pl-2 pr-6 flex justify-start items-center gap-4">
        <MapPin className="text-neutral-80" />
        <div className="flex-1 self-stretch pt-5 inline-flex flex-col justify-between items-start">
          <div className="self-stretch inline-flex justify-between items-center gap-2">
            <select
              name="location"
              aria-label="Location"
              className="w-full bg-transparent opacity-90 text-neutral-80 text-base font-normal leading-6 outline-none"
              defaultValue=""
            >
              <option value="">All locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="self-stretch h-px bg-neutral-20" />
        </div>
      </div>
      <button
        type="submit"
        className="w-full lg:w-52 self-stretch px-7 py-3.5 bg-primary flex justify-center items-center gap-2.5"
      >
        <span className="text-center justify-start text-white text-lg font-bold leading-7">
          Search my job
        </span>
      </button>
    </form>
  );
}
