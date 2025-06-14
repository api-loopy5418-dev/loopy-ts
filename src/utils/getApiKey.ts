import fs from 'fs'
import dotenv from 'dotenv'
import * as e from "../errors"

export function getApiKey() {
  if (!fs.existsSync(".env_loopy")) {
    throw new e.FileNotFoundError("LoopyError: API Key file not found")
  }
  dotenv.config({ path: ".env_loopy" })
  const key: any = process.env.KEY
  if (!key) {
    throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  }
  return key
}
