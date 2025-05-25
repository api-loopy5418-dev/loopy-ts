import dotenv from 'dotenv'
import fs from 'fs'


export function setApiKey(key: string) {
  if (key === undefined) return "LoopyError: setApiKey expected to get API Key argument."
  if (fs.existsSync(".env_loopy")) {
    dotenv.config({ path: ".env_loopy" });
    const key2: string | null | undefined = process.env.KEY
    if (!key2) {
      fs.appendFileSync(".env_loopy", `\nKEY=${key}`)
    } else {
      let c = fs.readFileSync('.env_loopy', 'utf-8');
      c = c.replace(/^KEY=.*/m, `KEY=${key}`);
      fs.writeFileSync('.env_loopy', c, 'utf-8');
    }
  } else {
    fs.writeFileSync('.env_loopy', `KEY=${key}`)
  }
}
