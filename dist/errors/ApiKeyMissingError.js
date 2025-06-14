"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyMissingError = void 0;
class ApiKeyMissingError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApiKeyMissingError";
    }
}
exports.ApiKeyMissingError = ApiKeyMissingError;
//# sourceMappingURL=ApiKeyMissingError.js.map