import "reflect-metadata"
import { AppDataSource } from "../ormconfig"
import { Key } from "../entity/Key"
import fs from 'fs'
import * as e from "../errors"
import { init } from "."

export async  function getApiKey() {
  if (!fs.existsSync("./database/database.sqlite")) {
    throw new e.FileNotFoundError("LoopyError: Database not found.")
  }
  await init()
  const data = AppDataSource.getRepository(Key)
  const a = await data.find()
  const res: Key | null = a[0] ?? null
  if (!res) return "none"
  return res.key
}
