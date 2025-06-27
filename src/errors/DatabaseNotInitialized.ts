export class DatabaseNotInitialized extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DatabaseNotInitialized";
    }
}
