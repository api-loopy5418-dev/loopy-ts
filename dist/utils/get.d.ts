import { Key } from "../entity/Key";
import { ResponseID } from "../entity/ResponseID";
declare const entityMap: {
    Key: typeof Key;
    ResponseID: typeof ResponseID;
};
type EntityKey = keyof typeof entityMap;
type EntityClassMap = {
    Key: Key;
    ResponseID: ResponseID;
};
export declare function get<K extends EntityKey>(key: K): Promise<EntityClassMap[K] | null>;
export {};
//# sourceMappingURL=get.d.ts.map