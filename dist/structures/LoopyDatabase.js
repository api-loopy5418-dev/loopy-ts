"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
exports.LoopyDatabase = LoopyDatabase;
const fs_1 = __importDefault(require("fs"));
const typeorm_1 = require("typeorm");
const ResponseID_1 = require("../entity/ResponseID");
const Key_1 = require("../entity/Key");
const e = __importStar(require("../errors"));
let file = "./database/database.sqlite";
async function DatabaseSetup() {
    exports.AppDataSource = new typeorm_1.DataSource({
        type: "sqlite",
        database: file,
        synchronize: true,
        logging: false,
        entities: [ResponseID_1.ResponseID, Key_1.Key],
        migrations: [],
        subscribers: [],
    });
    console.log("DatabaseSetup: Succesfully set up the database!");
}
async function DatabaseInitializer() {
    if (!exports.AppDataSource.isInitialized) {
        await exports.AppDataSource.initialize();
        console.log("DatabaseInitializer initialized the database.");
    }
}
async function LoopyDatabase(options) {
    if (typeof options?.file !== "undefined") {
        file = options?.file;
    }
    console.log("LoopyDatabase: Setting up the database");
    console.log("LoopyDatabase: Checking file existencce");
    if (!fs_1.default.existsSync(file)) {
        throw new e.FileNotFoundError("LoopyDatabase: File not found");
    }
    console.log("LoopyDatabase: File Found");
    console.log("LoopyDatabase used DatabaseSetup");
    await DatabaseSetup();
    console.log("LoopyDatabase used DatabaseInitializer");
    await DatabaseInitializer();
}
//# sourceMappingURL=LoopyDatabase.js.map