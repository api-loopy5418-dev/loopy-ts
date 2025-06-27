import { AppDataSource } from "../structures/LoopyDatabase"
import * as e from "../errors"

export async function check() {
  if (!AppDataSource.isInitialized) {
    throw new e.DatabaseNotInitialized("Database isn't initialized.")
  }
  return;
}
