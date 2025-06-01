import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../../errors"

export async function currencyConverter(base: string, target: string, amount: number) {
  if (base === undefined) throw new e.MissingArgsError("LoopyError: currencyConveter expected a string for base")
  if (target === undefined) throw new e.MissingArgsError("LoopyError: currencyConveter expected a string for target")
  if (amount === undefined || Number.isNaN(amount)) throw new e.InvalidArgError("LoopyError: currencyConveter expected a number for amount")
  if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: API Key file not found")
  dotenv.config({ path: ".env_loopy" })
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: API Key was not found.")
  try {
    return await axios.get(`https://api.loopy5418.dev/currency-converter?base=${base}&target=${target}&amount=${encodeURIComponent(amount)}&key=${key}`, {
      timeout: 5000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
}
