import { Request, Response } from "express";
import * as jobQueries from "./queries.js";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await jobQueries.getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const job = await jobQueries.getJobById(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: "Failed to fetch job" });
  }
};

export const createJob = async (req: Request, res: Response) => {
  const { title, company, location, description } = req.body;
  if (
    typeof title !== "string" || !title.trim() ||
    typeof company !== "string" || !company.trim() ||
    typeof location !== "string" || !location.trim() ||
    typeof description !== "string" || !description.trim()
  ) {
    return res.status(400).json({ error: "All fields are required and must be non-empty strings" });
   }
  }
  try {
    const newJob = await jobQueries.createJob({ title, company, location, description });
    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const deleted = await jobQueries.deleteJob(id);
    if (!deleted) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};
