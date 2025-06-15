import { loopyFetch, getApiKey } from "../../utils";
import * as e from "../../errors";

interface IAIImageOptions {
  prompt: string;
  canvas: string;
}


export async function image(prompt: string, canvas: string): Promise<any>;
export async function image(options: IAIImageOptions): Promise<any>;
export async function image(prompt: string | IAIImageOptions, canvas?: string): Promise<any> {
  let overloads: Partial<IAIImageOptions> = {};

  if (typeof prompt === "string") {
    overloads.prompt = prompt;
    overloads.canvas = (() => {
      if (canvas === "landscape" || canvas === "portrait" || canvas === "square" || canvas === undefined) {
        return canvas || "square"
      }
      throw new e.InvalidArgError(`LoopyError: AI.Generate.image expected landscape, square, portrait or nothing for canvas but got ${canvas}`)
    })();
  } else if (typeof prompt === "object") {
    overloads.prompt = prompt.prompt;
    overloads.canvas = (() => {
      if (prompt.canvas === "landscape" || prompt.canvas === "portrait" || prompt.canvas === "square" || prompt.canvas === undefined) {
        return prompt.canvas || "square"
      }
      throw new e.InvalidArgError(`LoopyError: AI.Generate.image expected landscape, square, portrait or nothing for canvas but got ${prompt.canvas}`);
    })();
  } else {
    throw new e.InvalidArgError(`LoopyError: AI.Generate.image expected string or object but got ${typeof prompt}`);
  }

  if (typeof overloads.prompt !== "string") {
    throw new e.InvalidArgError(`LoopyError: AI.Generate.image expected string for prompt but got ${typeof overloads.prompt}`);
  }

  return await loopyFetch(`https://api.loopy5418.dev/openai/image?prompt=${encodeURIComponent(overloads.prompt)}&canvas=${overloads.canvas}`, 20000, {
    'api-key': await getApiKey()
  })
}
