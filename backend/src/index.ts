import express, { NextFunction, Request, Response } from "express";
import { ENV } from "./config/env.js";
import cors from "cors";

const app = express();

if (!ENV.frontend_url) {
  throw new Error("Frontend URL is missing.");
}

app.use(cors({ origin: ENV.frontend_url, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    message: "server",
    endpoints: {
      jobs: "api/jobs",
      applications: "api/applications",
    },
  });
});
app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// app.use("/api/jobs", jobsRouters);
// app.use("/api/applications", applicationsRouters);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.status || 500).json({ message: err.message || "Internal server error" });
});

app.listen(ENV.port, () => console.log(`Server is running on port ${ENV.port}`));
