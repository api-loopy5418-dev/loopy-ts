"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNotFoundError = void 0;
class FileNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "FileNotFoundError";
    }
}
exports.FileNotFoundError = FileNotFoundError;
//# sourceMappingURL=FileNotFoundError.js.map