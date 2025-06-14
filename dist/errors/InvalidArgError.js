"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidArgError = void 0;
class InvalidArgError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidArgError";
    }
}
exports.InvalidArgError = InvalidArgError;
//# sourceMappingURL=InvalidArgError.js.map