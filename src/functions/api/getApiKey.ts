import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

export function getApiKey() {
  try {
    if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: getApiKey couldn't find API Key file")
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Something went wrong, ${err.message}`)
  }
  dotenv.config({ path: ".env_loopy" });
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: getApiKey couldn't find API Key")
  return key
};
