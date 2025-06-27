"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
const LoopyDatabase_1 = require("../structures/LoopyDatabase");
const Key_1 = require("../entity/Key");
const ResponseID_1 = require("../entity/ResponseID");
const check_1 = require("./check");
const entityMap = {
    Key: Key_1.Key,
    ResponseID: ResponseID_1.ResponseID,
};
async function get(key) {
    await (0, check_1.check)();
    const Entity = entityMap[key];
    const data = LoopyDatabase_1.AppDataSource.getRepository(Entity);
    const rows = await data.find();
    return rows[0] ?? null;
}
//# sourceMappingURL=get.js.map