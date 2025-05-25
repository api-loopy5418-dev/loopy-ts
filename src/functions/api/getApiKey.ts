import dotenv from 'dotenv'
import fs from 'fs'


export function getApiKey() {
  if (!fs.existsSync(".env_loopy")) return "LoopyError: getApiKey couldn't find API Key file"
  dotenv.config({ path: ".env_loopy" });
  const key: string | null | undefined = process.env.KEY
  if (!key) return "LoopyError: getApiKey couldn't find API Key"
  return key
};
