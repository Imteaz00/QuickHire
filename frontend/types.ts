import z from "zod";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  category: string[];
};

export const applyForm = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  resumeLink: z.url("Invalid URL").min(1, "Resume link is required"),
  coverNote: z.string().min(1, "Cover note is required"),
});

export type ApplicationFormData = z.infer<typeof applyForm>;

export const jobForm = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  category: z.array(z.string()).min(1, "At least one category is required"),
});

export type JobFormData = z.infer<typeof jobForm>;
