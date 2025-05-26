import axios from 'axios'

export async function seconds2Time(seconds: number) {
  if (seconds === undefined || Number.isNaN(seconds)) return "LoopyError: seconds2Time expected to get a number for seconds"
  return await axios.get(`https://api.loopy5418.dev/seconds-to-time?seconds=${seconds}`)
}
