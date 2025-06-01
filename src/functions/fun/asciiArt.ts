import axios from 'axios'
import * as e from "../../errors"

export async function asciiArt(text: string) {
  if (text === undefined) throw new e.MissingArgsError("LoopyError: asciiArt expected to get string for text.")
  try {
    return await axios.get(`https://api.loopy5418.dev/ascii-art?text=${encodeURIComponent(text)}`, {
      timeout: 3000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
};
