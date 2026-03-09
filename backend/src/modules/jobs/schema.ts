import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { applications } from "../applications/schema.js";
import { CATEGORY } from "../../constants.js";

export const categories = pgEnum("categories", [
  CATEGORY.DESIGN,
  CATEGORY.SALES,
  CATEGORY.MARKETING,
  CATEGORY.FINANCE,
  CATEGORY.TECHNOLOGY,
  CATEGORY.ENGINEERING,
  CATEGORY.BUSINESS,
  CATEGORY.HR,
]);

export const jobs = pgTable("jobs", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  category: categories("category").array().notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const jobsRelations = relations(jobs, ({ many }) => ({
  applications: many(applications),
}));
