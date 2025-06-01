import dotenv from 'dotenv'
import fs from 'fs'
import * as e from "../errors"

interface IloopyOptions {
  apiKey: string;
}

export function loopy(options: IloopyOptions): void {
  if (options.apiKey === undefined) throw new e.ApiKeyMissingError("LoopyError: Can't set up the package without an API key.")
  if (fs.existsSync(".env_loopy")) {
    dotenv.config({ path: ".env_loopy" });
    const key: string | null | undefined = process.env.KEY
    if (!key) {
      try {
        fs.appendFileSync(".env_loopy", `\nKEY=${options.apiKey}`)
      } catch (err: any) {
        throw new e.UnexpectedError(`LoopyError: Couldn't add the new API key, ${err.message}`)
      }
    } else {
      let content = ""
      try {
        let content = fs.readFileSync('.env_loopy', 'utf-8');
      } catch (err: any) {
        throw new e.UnexpectedError(`LoopyError: Couldn't read '.env_loopy' file, ${err.message}`)
      }
      try {
        content = content.replace(/^KEY=.*/m, `KEY=${options.apiKey}`);
      } catch (err: any) {
        throw new e.UnexpectedError(`LoopyError: Couldn't change the API key, ${err.message}`)
      }
      try {
        fs.writeFileSync('.env_loopy', content, 'utf-8')
      } catch (err: any) {
        throw new e.UnexpectedError(`LoopyError: Couldn't add the changed API key, ${err.message}`)
      }
    }
  } else {
    try {
      fs.writeFileSync('.env_loopy', `KEY=${options.apiKey}`)
    } catch (err: any) {
      throw new e.UnexpectedError(`LoopyError: Couldn't generate file/add API key, ${err.message}`)
    }
  }
}
