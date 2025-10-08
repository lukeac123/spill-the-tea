import "dotenv/config";
import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

// Need this to get access to env file in next.js
dotenv.config({
  path: "env",
});

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
