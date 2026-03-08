import { Request, Response } from "express";
import * as applicationQueries from "./queries.js";

export const createApplication = async (req: Request, res: Response) => {
  try {
    const { jobId, name, email, resumeLink, coverNote } = req.body;
    if (!jobId || !name || !email || !resumeLink || !coverNote) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    const newApplication = await applicationQueries.createApplication({
      jobId,
      name,
      email,
      resumeLink,
      coverNote,
    });
    return res.status(201).json(newApplication);
  } catch (error) {
    console.error("Error creating application:", error);
    res.status(500).json({ error: "Failed to create application" });
  }
};

export const getAllApplications = async (req: Request, res: Response) => {
  try {
    const allApplications = await applicationQueries.getAllApplications();
    return res.status(200).json(allApplications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return res.status(500).json({ error: "Failed to fetch applications" });
  }
};
