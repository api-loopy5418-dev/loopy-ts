import fs from "fs";
import { AppDataSource } from "../../ormconfig";
import { Key } from "../../entity/Key";
import * as e from "../../errors";
import { init } from "../../utils"

export async function temp(newKeyValue: string) {
  if (!fs.existsSync("./database/database.sqlite")) {
    throw new e.FileNotFoundError("LoopyError: Database not found.");
  }

  await init();

  const data = AppDataSource.getRepository(Key);

  await data.clear()

  const key = new Key();
  key.key = newKeyValue;

  await data.save(key);
}
