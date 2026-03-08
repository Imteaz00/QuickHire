import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { jobs } from "../jobs/schema.js";
import { relations } from "drizzle-orm";

export const applications = pgTable("applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  jobId: uuid("job_id")
    .notNull()
    .references(() => jobs.id),
  name: text("name").notNull(),
  email: text("email").notNull(),
  resumeLink: text("resume_link").notNull(),
  coverNote: text("cover_note").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const applicationsRelations = relations(applications, ({ one }) => ({
  job: one(jobs, {
    fields: [applications.jobId],
    references: [jobs.id],
  }),
}));
