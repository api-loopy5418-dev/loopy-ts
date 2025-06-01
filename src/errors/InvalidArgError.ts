export class InvalidArgError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidArgError";
    }
}
