"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = void 0;
class UnexpectedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnexpectedError";
    }
}
exports.UnexpectedError = UnexpectedError;
//# sourceMappingURL=UnexpectedError.js.map