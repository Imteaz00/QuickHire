"use server";

import { BACKEND_URL } from "@/server";

export type AdminApplication = {
  id: string;
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
  createdAt: string;
  job: {
    id: string;
    title: string;
    company: string;
  } | null;
};

export default async function fetchApplications() {
  const res = await fetch(`${BACKEND_URL}/api/applications`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch applications: ${res.statusText}`);
  }

  return (await res.json()) as AdminApplication[];
}
