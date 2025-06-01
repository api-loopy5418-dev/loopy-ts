"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingArgsError = void 0;
class MissingArgsError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingArgsError";
    }
}
exports.MissingArgsError = MissingArgsError;
//# sourceMappingURL=MissingArgsError.js.map