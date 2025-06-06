import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

export async function bdfdNodeInfo() {
  if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: API Key file not found")
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  try {
    return await axios.get(`https://api.loopy5418.dev/bdfd-node-info?key=${key}`, {
      timeout: 3000
    })
  } catch (e: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${e.message}`)
  }
}
