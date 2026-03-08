import { Router } from "express";
import * as jobController from "./controller.js";

const jobsRouter = Router();

jobsRouter.get("/", jobController.getAllJobs);
jobsRouter.get("/categoryCounts", jobController.getCategoryCounts);
jobsRouter.get("/locations", jobController.getAllLocations);
jobsRouter.get("/:id", jobController.getJobById);
jobsRouter.post("/", jobController.createJob);
jobsRouter.delete("/:id", jobController.deleteJob);

export default jobsRouter;
