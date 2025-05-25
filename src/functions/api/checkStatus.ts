import axios from 'axios'

export async function checkStatus() {
  const result = await axios.get("https://api.loopy5418.dev/health")
  return result.data == "OK" ? true: false
};
