"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
const Key_1 = require("../entity/Key");
const ResponseID_1 = require("../entity/ResponseID");
const LoopyDatabase_1 = require("../structures/LoopyDatabase");
const check_1 = require("./check");
const entityMap = {
    Key: Key_1.Key,
    ResponseID: ResponseID_1.ResponseID,
};
async function set(key, value) {
    await (0, check_1.check)();
    const Entity = entityMap[key];
    const data = LoopyDatabase_1.AppDataSource.getRepository(Entity);
    await data.clear(); // clear all old entries
    const instance = new Entity();
    instance.key = value;
    await data.save(instance);
    console.log("✔️ Saved entity:", await data.find());
}
//# sourceMappingURL=set.js.map