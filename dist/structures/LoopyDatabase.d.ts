import { DataSource } from "typeorm";
interface ILoopyDBOptions {
    file: string;
    sync: boolean;
    logging: boolean;
}
export declare let AppDataSource: DataSource;
export declare function LoopyDatabase(options?: ILoopyDBOptions): Promise<void>;
export {};
//# sourceMappingURL=LoopyDatabase.d.ts.map