import { Key } from "../entity/Key";
import { ResponseID } from "../entity/ResponseID";
import { AppDataSource } from "../structures/LoopyDatabase";
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


export async function set<K extends EntityKey>(key: K, value: any) {
  await check();
  const Entity = entityMap[key];
  const data = AppDataSource.getRepository<EntityClassMap[K]>(Entity as EntityTarget<EntityClassMap[K]>);

  await data.clear(); // clear all old entries
  const instance = new Entity() as EntityClassMap[K];
  (instance as any).key = value;
  await data.save(instance);
}
