import * as e from "../errors"  
  
async function get(url: string, timeout: number, header?: Record<string, string>) {  
  const controller = new AbortController();  
  const time = setTimeout(() => controller.abort(), timeout);  
  
  try {  
    const res = await fetch(url, {  
      signal: controller.signal,  
      headers: header  
    });  
  
    clearTimeout(time);  
    const body = await res.text()
    return Promise.resolve().then(() => JSON.parse(body)).catch(() => body);
  } catch (err: any) {  
    clearTimeout(time);  
    throw new e.UnexpectedError(`Couldn't make a request, ${err.message}`);  
  }  
}

async function post(url: string, timeout: number, body: Record<string, string>, header?: Record<string, string>) {
  const controller = new AbortController();
  const time = setTimeout(() => controller.abort(), timeout);

  const headers = {
    "Content-Type": "application/json",
    ...header,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      signal: controller.signal,
      headers,
      body: JSON.stringify(body),
    });

    clearTimeout(time);
    return await res.json();
  } catch (err: any) {
    clearTimeout(time);
    throw new e.UnexpectedError(`Couldn't make a request, ${err.message}`);
  }
}

async function loopyFetch(url: string, timeout: number, header?: Record<string, string>) {
  return get(url, timeout, header)
}

loopyFetch.post = post

export { loopyFetch }
