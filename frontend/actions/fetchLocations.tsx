"use server";

export default async function fetchLocations() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/jobs/locations`);
    if (!res.ok) {
      throw new Error(`Failed to fetch locations: ${res.statusText}`);
    }
    const locations = await res.json();
    return locations as string[];
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw new Error("Failed to fetch locations");
  }
}
