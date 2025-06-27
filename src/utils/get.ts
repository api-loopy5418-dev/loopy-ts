import { AppDataSource } from "../structures/LoopyDatabase";
import { Key } from "../entity/Key";
import { ResponseID } from "../entity/ResponseID";
import { check } from "./check";
import { EntityTarget } from "typeorm";

const entityMap = {
  Key,
  ResponseID,
};

type EntityKey = keyof typeof entityMap;
type EntityClassMap = {
  Key: Key;
  ResponseID: ResponseID;
};

export async function get<K extends EntityKey>(key: K): Promise<EntityClassMap[K] | null> {
  await check();
  const Entity = entityMap[key];
  const data = AppDataSource.getRepository<EntityClassMap[K]>(Entity as EntityTarget<EntityClassMap[K]>);
  const rows = await data.find();
  return rows[0] ?? null;
}
