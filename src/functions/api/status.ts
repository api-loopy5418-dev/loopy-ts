import { loopyFetch } from "../../utils"

export async function status() {
  try {
    return await loopyFetch("https://api.loopy5418.dev/health", 3000) === "OK"
  } catch (e) {
    return false
  }
};
