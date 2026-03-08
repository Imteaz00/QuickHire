"use server";

import { revalidatePath } from "next/cache";
import { BACKEND_URL } from "@/server";

export default async function deleteJob(input: FormData | string) {
  const jobId = typeof input === "string" ? input : String(input.get("jobId") || "").trim();

  try {
    if (!jobId) {
      throw new Error("Job id is required");
    }

    const res = await fetch(`${BACKEND_URL}/api/jobs/${jobId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete job post");
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    throw new Error("Failed to delete job post");
  }

  revalidatePath("/admin");
  revalidatePath("/jobs");
}
