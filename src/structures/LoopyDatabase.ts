"use strict"

import fs from "fs"
import { DataSource } from "typeorm"
import { ResponseID } from "../entity/ResponseID"
import { Key } from "../entity/Key"
import * as e from "../errors"   

/*
* Setting up options & variables
*/
interface ILoopyDBOptions {
  file: string;
  sync: boolean;
  logging: boolean;
}
let file = "./database/database.sqlite"
export let AppDataSource: DataSource;

async function DatabaseSetup() {
  AppDataSource = new DataSource({
    type: "sqlite",
    database: file,
    synchronize: true,
    logging: false,
    entities: [ResponseID, Key],
    migrations: [],
    subscribers: [],
  })
  console.log("DatabaseSetup: Succesfully set up the database!")
}

async function DatabaseInitializer() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("DatabaseInitializer initialized the database.");
  }
}

export async function LoopyDatabase(options?: ILoopyDBOptions) {
  if (typeof options?.file !== "undefined") {
    file = options?.file
  }
  console.log("LoopyDatabase: Setting up the database")
  console.log("LoopyDatabase: Checking file existencce")
  if (!fs.existsSync(file)) {
    throw new e.FileNotFoundError("LoopyDatabase: File not found")
  }
  console.log("LoopyDatabase: File Found")
  console.log("LoopyDatabase used DatabaseSetup")
  await DatabaseSetup()
  console.log("LoopyDatabase used DatabaseInitializer")
  await DatabaseInitializer()
}
