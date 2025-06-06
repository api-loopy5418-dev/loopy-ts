import fs from 'fs'
import dotenv from 'dotenv'
import axios from 'axios'
import * as e from "../../errors"

export async function robloxSearch(username: string) {
  if (username === undefined) throw new e.MissingArgsError("LoopyError: robloxSearch  expected to get a string for username")
  if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: API Key file not found")
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  try {
    return await axios.get(`https://api.loopy5418.dev/roblox-user-search?username=${encodeURIComponent(username)}&key=${key}`, {
      timeout: 7000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
}
