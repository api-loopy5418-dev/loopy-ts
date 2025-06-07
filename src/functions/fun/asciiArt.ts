import { loopyFetch } from "../../utils"
import * as e from "../../errors"

/*
* Turns a text into ascii art
* Pretty cool
* ...If your screen is not small
*/

interface IAsciiArtOptions {
  text: string;
}
/*
* Accepts string
* And an object
*/
export async function asciiArt(option: IAsciiArtOptions | string) {
  if (typeof option === undefined) {
    throw new e.MissingArgsError("LoopyError: asciiArt expected to get string for text.")
  }
  return await loopyFetch(`https://api.loopy5418.dev/ascii-art?text=${encodeURIComponent(typeof option === "string" ? option : option.text)}`, 3000)
};
