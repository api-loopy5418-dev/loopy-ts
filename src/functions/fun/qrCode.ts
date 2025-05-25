import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config({ path: ".env_loopy" })

export async function qrCode(text: string) {
  if (text === undefined) return "LoopyError: qrCode expected a string for text"
  if (!fs.existsSync(".env_loopy")) return "LoopyError: API Key file not found"
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) return "LoopyError: API Key was not found."
  const qr: string = encodeURIComponent(text)
  return await axios.get(`https://api.loopy5418.dev/qr?data=${qr}&key=${key}`)
}
