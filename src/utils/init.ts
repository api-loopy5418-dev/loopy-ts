import { AppDataSource } from "../ormconfig";

export async function init() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
