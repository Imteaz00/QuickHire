import { db } from "../../config/db.js";
import type { NewApplication } from "../../types.js";
import { applications } from "./schema.js";

export const createApplication = async (data: NewApplication) => {
  const [application] = await db.insert(applications).values(data).returning();
  return application;
};

export const getAllApplications = async () => {
  return db.query.applications.findMany({
    with: {
      job: true,
    },
    orderBy: (applications, { desc }) => [desc(applications.createdAt)],
  });
};
