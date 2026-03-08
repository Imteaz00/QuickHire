"use server";

import { BACKEND_URL } from "@/server";
import type { ApplicationFormData } from "@/types";

export default async function submitApplication({
  data,
  jobId,
}: {
  data: ApplicationFormData;
  jobId: string;
}) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, jobId }),
    });
    if (!res.ok) {
      throw new Error("Failed to submit application");
    }
    return await res.json();
  } catch (error) {
    return {
      error: (error as Error).message || "An error occurred while submitting the application",
    };
  }
}
