import axios from 'axios'

export async function owoifyText(text: string) {
  if (text === undefined) return "LoopyError: owoifyText expected a text."
  const uwu = encodeURIComponent(text)
  return await axios.get(`https://api.loopy5418.dev/owoify?text=${uwu}`)
};
