import { and, arrayContains, eq, ilike, or, sql } from "drizzle-orm";
import { db } from "../../config/db.js";
import type { NewJob } from "../../types.js";
import { jobs } from "./schema.js";

export const createJob = async (data: NewJob): Promise<typeof jobs.$inferInsert> => {
  const [job] = await db.insert(jobs).values(data).returning();
  return job;
};

export const getAllJobs = async ({
  category,
  search,
  location,
}: {
  category?: string;
  search?: string;
  location?: string;
}) => {
  const whereConditions: any[] = [];

  if (category) {
    whereConditions.push(arrayContains(jobs.category, [category]));
  }

  if (search) {
    whereConditions.push(
      or(ilike(jobs.title, `%${search}%`), ilike(jobs.description, `%${search}%`)),
    );
  }

  if (location) {
    whereConditions.push(eq(jobs.location, location));
  }

  return db.query.jobs.findMany({
    where: and(...whereConditions),
    orderBy: (jobs, { desc }) => [desc(jobs.createdAt)],
  });
};

export const getJobById = async (id: string) => {
  return db.query.jobs.findFirst({
    where: eq(jobs.id, id),
  });
};

export const deleteJob = async (id: string) => {
  const [deletedJob] = await db.delete(jobs).where(eq(jobs.id, id)).returning();
  return deletedJob;
};

export const getCategoryCounts = async () => {
  const result = await db.execute<{ category: string; count: number }>(sql`
    select
      cat.category as category,
      count(*)::int as count
    from ${jobs}
    cross join unnest(${jobs.category}) as cat(category)
    group by cat.category

  `);

  return result.rows;
};

export const getAllLocations = async () => {
  const result = await db
    .selectDistinct({ location: jobs.location })
    .from(jobs)
    .orderBy(jobs.location);
  return result.map((row) => row.location);
};
