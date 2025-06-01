export class MissingArgsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MissingArgsError";
    }
}
