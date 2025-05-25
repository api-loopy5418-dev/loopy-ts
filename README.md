# loopy-ts

The api wrapper for api.loopy5418.dev. api.loopy5418.dev is a mutli-purpose api. It has many endpoints which you can see at [here](https://api.loopy5418.dev/).


Below will show how you set this wrapper.

```js
const d = require("loopy-ts")
// Or whatever you want to name it

d.setApiKey("[Secret]") // You can get your api key at https://discord.gg/ZwK2W7GxhA

d.aiGenerate("Hello! How are you?", 2).then(result => {
  console.log(result.data.response)
}); /* 
* The meaning for 2 at the end is how speedy should the AI be. All speeds:
* 0: large, so slow but smart
* 1: balanced, average speed
* 2: fast, not smart
*/
```