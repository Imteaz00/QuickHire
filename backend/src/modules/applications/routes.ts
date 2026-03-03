import { Router } from "express";
import * as applicationController from "./controller.js";

const applicationsRouter = Router();

applicationsRouter.post("/", applicationController.createApplication);

export default applicationsRouter;
