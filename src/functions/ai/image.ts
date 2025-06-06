import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

export async function aiGenerateImage(prompt: string, canvas: string) {
  if (prompt === undefined) throw new e.MissingArgsError("LoopyError: aiGenerateImage expected a string for prompt")
  if (canvas === undefined) throw new e.MissingArgsError("LoopyError: aiGenerateImage expected a string for canvas")
  if (canvas !== "landscape" && canvas !== "portrait" && canvas !== "square") throw new e.InvalidArgError(`LoopyError: aiGenerateImage expected to get 0, 1 or 2 for speed but got "${canvas}"`)
  if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: API Key file not found")
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  try {
    return await axios.get(`https://api.loopy5418.dev/openai/image?prompt=${encodeURIComponent(prompt)}&canvas=${encodeURIComponent(canvas)}&key=${key}`)
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
}
