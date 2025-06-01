import axios from 'axios'
import * as e from "../../errors"

export async function owoifyText(text: string) {
  if (text === undefined) throw new e.MissingArgsError("LoopyError: owoifyText expected a text.")
  try {
    return await axios.get(`https://api.loopy5418.dev/owoify?text=${encodeURIComponent(text)}`, {
      timeout: 3000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
};
