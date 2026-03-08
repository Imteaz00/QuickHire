"use server";

import { BACKEND_URL } from "@/server";
import type { Job } from "@/types";

export default async function fetchAllJobs({
  category,
  sort,
  search,
  location,
}: {
  category?: string;
  sort?: string;
  search?: string;
  location?: string;
}) {
  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (search) queryParams.append("search", search);
  if (location) queryParams.append("location", location);
  queryParams.append("sort", sort || "newest");

  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs?${queryParams.toString()}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.statusText}`);
    }
    const jobs = await res.json();
    return jobs as Job[];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
