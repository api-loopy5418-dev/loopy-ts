"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const ResponseID_1 = require("./entity/ResponseID");
const Key_1 = require("./entity/Key");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [ResponseID_1.ResponseID, Key_1.Key],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=ormconfig.js.map