import { getApiKey } from "../../utils"
import * as e from "../../errors"

export async function key() {
  return await getApiKey()
};
