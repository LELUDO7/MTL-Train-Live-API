import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.resolve(__dirname, "../../");
const envPath = path.join(rootPath, ".env");

dotenv.config({ path: envPath });

console.log(process.env.EXO_API_KEY)

if (!process.env.PORT) {
  console.error('❌ PORT Variable missing in .env');
  process.exit(1);
}

if (!process.env.EXO_API_KEY) {
  console.error('❌ EXO_API_KEY Variable missing in .env');
  process.exit(1);
}

export const env = {
  exoApiKey: process.env.EXO_API_KEY ?? "null",
  port: Number(process.env.PORT ?? 3000),
};

