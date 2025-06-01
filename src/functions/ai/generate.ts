import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

export async function aiGenerate(prompt: string, speed: number) {
  if (prompt === undefined) throw new e.MissingArgsError("LoopyError: aiGenerate expected a string for prompt")
  if (speed === undefined) throw new e.MissingArgsError("LoopyError: aiGenerate expected a number for speed")
  if (speed !== 0 && speed !== 1 && speed !== 2) throw new e.InvalidArgError(`LoopyError: aiGenerate expected to get 0, 1 or 2 for speed but got "${speed}"`)
  if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: API Key file not found")
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  const map = {
    0: "large",
    1: "balanced",
    2: "fast"
  }
  try {
    return await axios.get(`https://api.loopy5418.dev/openai/text?prompt=${encodeURIComponent(prompt)}&speed=${map[speed]}&key=${key}`, {
      timeout: 20000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
}



