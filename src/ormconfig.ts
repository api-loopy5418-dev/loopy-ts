import { DataSource } from "typeorm"
import { ResponseID } from "./entity/ResponseID"
import { Key } from "./entity/Key"

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database/database.sqlite",
  synchronize: true,
  logging: false,
  entities: [ResponseID, Key],
  migrations: [],
  subscribers: [],
})
