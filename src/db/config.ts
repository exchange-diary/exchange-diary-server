import * as dotenv from "dotenv";
dotenv.config();

export interface ProductionDbConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
}

export const config: ProductionDbConfig = {
  host: process.env.DB_HOST!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  port: 3306!,
};


export const jwt_secret_key = process.env.JWT_SECRET;