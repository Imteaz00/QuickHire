import { eq } from "drizzle-orm";
import { db } from "../../config/db.js";
import type { NewJob } from "../../types.js";
import { jobs } from "./schema.js";

export const createJob = async (data: NewJob) => {
  const [job] = await db.insert(jobs).values(data).returning();
  return job;
};

export const getAllJobs = async () => {
  return db.query.jobs.findMany({
    orderBy: (jobs, { desc }) => [desc(jobs.createdAt)],
  });
};

export const getJobById = async (id: string) => {
  return db.query.jobs.findFirst({
    where: eq(jobs.id, id),
  });
};

export const deleteJob = async (id: string) => {
  await db.delete(jobs).where(eq(jobs.id, id));
};
