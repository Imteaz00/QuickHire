"use server";

import { revalidatePath } from "next/cache";
import { BACKEND_URL } from "@/server";
import { jobForm, type JobFormData } from "@/types";

export default async function createJob({ data }: { data: JobFormData }) {
  const parsed = jobForm.safeParse(data);

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message || "Invalid job post data",
    };
  }

  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (!res.ok) {
      throw new Error("Failed to create job post");
    }

    revalidatePath("/admin");
    revalidatePath("/admin/allposts");
    revalidatePath("/jobs");

    return await res.json();
  } catch (error) {
    return {
      error: (error as Error).message || "An error occurred while creating the job post",
    };
  }
}
