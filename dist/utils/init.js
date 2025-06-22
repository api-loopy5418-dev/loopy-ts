"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const ormconfig_1 = require("../ormconfig");
async function init() {
    if (!ormconfig_1.AppDataSource.isInitialized) {
        await ormconfig_1.AppDataSource.initialize();
    }
}
//# sourceMappingURL=init.js.map