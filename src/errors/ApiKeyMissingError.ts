export class ApiKeyMissingError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ApiKeyMissingError";
    }
}
