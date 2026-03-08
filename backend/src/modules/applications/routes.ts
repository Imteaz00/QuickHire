import { Router } from "express";
import * as applicationController from "./controller.js";

const applicationsRouter = Router();

applicationsRouter.get("/", applicationController.getAllApplications);
applicationsRouter.post("/", applicationController.createApplication);

export default applicationsRouter;
