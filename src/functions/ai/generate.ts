import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config({ path: ".env_loopy" })

export async function aiGenerate(prompt: string, speed: number) {
  if (prompt === undefined) return "LoopyError: aiGenerate expected a string for prompt"
  if (speed !== 0 && speed !== 1 && speed !== 2) return `LoopyError: aiGenerate expected to get 0, 1 or 2 for speed but got "${speed}"`
  if (!fs.existsSync(".env_loopy")) return "LoopyError: API Key file not found"
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) return "LoopyError: API Key was not found."
  const text: string = encodeURIComponent(prompt)
  const fastM = {
    0: "large",
    1: "balanced",
    2: "fast"
  }
  const fast: string = fastM[speed]
  return await axios.get(`https://api.loopy5418.dev/openai/text?prompt=${text}&speed=${fast}&key=${key}`)
}



