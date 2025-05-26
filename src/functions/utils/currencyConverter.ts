import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config({ path: ".env_loopy" })

export async function currencyConverter(base: string, target: string, amount: number) {
  if (base === undefined) return "LoopyError: currencyConveter expected a string for base"
  if (target === undefined) return "LoopyError: currencyConveter expected a string for target"
  if (amount === undefined || Number.isNaN(amount)) return "LoopyError: currencyConveter expected a number for amount"
  if (!fs.existsSync(".env_loopy")) return "LoopyError: API Key file not found"
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) return "LoopyError: API Key was not found."
  const money: string = encodeURIComponent(amount)
  return await axios.get(`https://api.loopy5418.dev/currency-converter?base=${base}&target=${target}&amount=${money}&key=${key}`)
}
