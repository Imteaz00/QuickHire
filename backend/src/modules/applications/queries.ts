import { db } from "../../config/db.js";
import type { NewApplication } from "../../types.js";
import { applications } from "./schema.js";

export const createApplication = async (data: NewApplication) => {
  const [application] = await db.insert(applications).values(data).returning();
  return application;
};
