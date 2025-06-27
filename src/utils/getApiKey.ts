import { get } from "./get"

export async function getApiKey() {
  return (await get("Key"))?.key ?? "none";
}
