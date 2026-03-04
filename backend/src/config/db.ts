import { Pool } from "pg";
import { ENV } from "./env.js";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";

if (!ENV.database_url) {
  throw new Error("Database_URL is missing.");
}

const pool = new Pool({
  connectionString: ENV.database_url,
});

pool.on("connect", () => console.log("Database connected."));
pool.on("error", (err) => console.error("Database connection error:", err));

const shutdown = async () => {
  await pool.end();
  console.log("Database pool closed.");
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
export const db = drizzle({ client: pool, schema });
