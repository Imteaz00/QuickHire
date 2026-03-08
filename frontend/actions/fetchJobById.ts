"use server";

import { BACKEND_URL } from "@/server";
import type { Job } from "@/types";

export default async function fetchJobById(id: string) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch job: ${res.statusText}`);
    }
    const job = await res.json();
    return job as Job;
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
}
