import axios from 'axios'

export async function emojifyText(text: string) {
  if (text === undefined) return "LoopyError: emojifyText expected to get text."
  const emoji = encodeURIComponent(text)
  return await axios.get(`https://api.loopy5418.dev/emojify?text=${emoji}`)
};
