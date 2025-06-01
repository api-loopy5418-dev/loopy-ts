import axios from 'axios'
import * as e from "../../errors"

export async function seconds2Time(seconds: number) {
  if (seconds === undefined || Number.isNaN(seconds)) throw new e.InvalidArgError("LoopyError: seconds2Time expected to get a number for seconds")
  try {
    return await axios.get(`https://api.loopy5418.dev/seconds-to-time?seconds=${seconds}`, {
      timeout: 3000,
    })
  } catch (err: any) {
    throw new e.UnexpectedError(`LoopyError: Couldn't make a request, ${err.message}`)
  }
}
