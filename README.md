<p align="center">
  <a href="https://api.loopy5418.dev/">
    <img width="200" src="https://cdn.discordapp.com/icons/1365258638222164008/b0ac96e1df99c594cfd6ccb5d435f618.webp" alt="loopy-ts">
  </a>
</p>

<div align="center">
  <b>The only api.loopy5418.dev wrapper you'll ever need.....</b>
</div>

---

<br/>

<div align="center">

[![Loopy Server][loopy-ts-server]][loopy-ts-server-url] &nbsp; &nbsp;
![License](https://img.shields.io/npm/l/loopy-ts) &nbsp; &nbsp;
![Website](https://img.shields.io/website?url=https%3A%2F%2Fapi.loopy5418.dev%2F&label=api.loopy5418.dev) &nbsp; &nbsp;

[loopy-ts-server]: https://img.shields.io/discord/1365258638222164008?color=5865F2&logo=discord&logoColor=white

[loopy-ts-server-url]: https://discord.gg/ZwK2W7GxhA

  </div>

<br />

<div align = "center">

**[ Documentation ](https://api.loopy5418.dev/)** | **[ Support Server ](https://discord.gg/ZwK2W7GxhA)** | **[ NPM ](https://npmjs.org/package/loopy-ts)** | **[ GitHub ](https://github.com/api-loopy5418-dev/loopy-ts)**

</div>

---

## About

loopy-ts is a wrapper for api.loopy5418.dev made in Typescript.

It's easy for people that don't know how to make HTTP requests.

## Setup

```javascript
const { loopy, aiGenerate, checkStatus } = require("loopy-ts");
// Or const d = require("loopy-ts")

loopy({
  apiKey: "Secret!"
})
/* You can get your api key at our server
* https://discord.gg/ZwK2W7GxhA
*/


// Open AI
aiGenerate("Hello, how are you! What's the weather in New York?", 2).then(result => {
  console.log(result.data.response);
});
/* After running check your terminal!
* It should say something like:
* "Hello! I'm just a program, so I 
* don't have feelings, but I'm here to help you. 
* I don't have real-time data on the weather. 
* For the most accurate and current weather 
* information in New York, please check a 
* reliable weather website or app."
*/
```

## Notices

> There are no notices as of now

