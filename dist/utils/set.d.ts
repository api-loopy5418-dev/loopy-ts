import { Key } from "../entity/Key";
import { ResponseID } from "../entity/ResponseID";
declare const entityMap: {
    Key: typeof Key;
    ResponseID: typeof ResponseID;
};
type EntityKey = keyof typeof entityMap;
export declare function set<K extends EntityKey>(key: K, value: any): Promise<void>;
export {};
//# sourceMappingURL=set.d.ts.map