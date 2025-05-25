import axios from 'axios'

export async function checkStatus() {
  let result;
  try {
    result = await axios.get("https://api.loopy5418.dev/health")
  } catch (e) {
    result.data = false
  }
  return result.data == "OK" ? true: false
};
