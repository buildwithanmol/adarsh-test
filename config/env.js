import dotenv from "dotenv";

const { config } = dotenv;

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, DB_URI, NODE_ENV } = process.env;
