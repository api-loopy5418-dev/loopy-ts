"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseNotInitialized = void 0;
class DatabaseNotInitialized extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseNotInitialized";
    }
}
exports.DatabaseNotInitialized = DatabaseNotInitialized;
//# sourceMappingURL=DatabaseNotInitialized.js.map