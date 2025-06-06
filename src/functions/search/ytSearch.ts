import dotenv from 'dotenv'
import fs from 'fs'
import axios from 'axios'
import * as e from "../../errors"

export async function ytSearch(query: string) {
  if (query === undefined) throw new e.MissingArgsError("LoopyError: ytSearch expected string for query.")
  try {
    if (!fs.existsSync(".env_loopy")) throw new e.FileNotFoundError("LoopyError: ytSearch couldn't find API Key file")
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Something went wrong, ${err.message}`)
  }
  dotenv.config({ path: ".env_loopy" });
  const key: string | null | undefined = process.env.KEY
  if (!key) throw new e.ApiKeyMissingError("LoopyError: ytSearch couldn't find API Key")
  try {
    return await axios.get(`https://api.loopy5418.dev/yt-search?query=${encodeURIComponent(query)}%20sex&key=${key}`, {
      timeout: 7000,
    })
  } catch (e: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${e.message}`)
  }
};
