import "reflect-metadata"
import { AppDataSource } from "../structures/LoopyDatabase"
import { Key } from "../entity/Key"

export async function getApiKey() {
  const data = AppDataSource.getRepository(Key);
  const a = await data.find();
  const res: Key | null = a[0] ?? null;
  if (!res) return "none";
  return res.key;
}
