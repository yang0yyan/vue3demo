import { CacheEnum } from "./CacheEnum";

export interface IStorage {
    set(key: CacheEnum, value: any, expire: number | null): void;
    get(key: CacheEnum, def: any): void;
    remove(key: CacheEnum): void;
    clear(): void;
}