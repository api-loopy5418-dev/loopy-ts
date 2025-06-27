import fs from "fs";
import { Database } from "../../utils"
import * as e from "../../errors";

export async function temp(newKeyValue: string) {
  Database.set("Key", newKeyValue)
}
