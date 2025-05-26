import axios from 'axios'

export async function asciiArt(text: string) {
  if (text === undefined) return "LoopyError: asciiArt expected to get string for text."
  const ascii = encodeURIComponent(text)
  return await axios.get(`https://api.loopy5418.dev/ascii-art?text=${ascii}`)
};
