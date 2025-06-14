import * as e from "../errors"

export async function loopyFetch(url: string, timeout: number, header?: Record<string, string>) {
  const controller = new AbortController();
  const time = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: header
    });

    clearTimeout(time);
    return await res.json();
  } catch (err: any) {
    clearTimeout(time);
    throw new e.UnexpectedError(`Couldn't make a request, ${err.message}`);
  }
}
