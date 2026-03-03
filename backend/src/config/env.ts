import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const ENV = {
  port: process.env.PORT || 8000,
  frontend_url: process.env.FRONTEND_URL,
  database_url: process.env.DATABASE_URL,
};
