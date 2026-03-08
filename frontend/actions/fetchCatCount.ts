"use server";

import { BACKEND_URL } from "@/server";

export default async function fetchCatCount() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs/categoryCounts`);
    if (!res.ok) {
      throw new Error(`Failed to fetch category counts: ${res.statusText}`);
    }
    const catCounts = await res.json();
    return catCounts as { category: string; count: number }[];
  } catch (error) {
    console.error("Error fetching category counts:", error);
    throw new Error("Failed to fetch category counts");
  }
}
