import type { CacheEnum } from './CacheEnum';
import type { IStorage } from './IStorage';
import { StorageCache } from './StorageCache';

export class StorageUtil {
  static storage: IStorage;
  static {
    this.storage = this.createSessionStorage();
  }

  static set(key: CacheEnum, value: any, expire: number | null = null): void {
    this.storage.set(key, value, expire);
  }
  static get(key: CacheEnum, def: any): any {
    return this.storage.get(key, def);
  }
  static remove(key: CacheEnum): void {
    this.storage.remove(key);
  }
  static clear(): void {
    this.storage.clear();
  }

  static createStorage(storage: Storage): IStorage {
    return new StorageCache.Builder().setStorage(storage).setHasEncrypt(true).build();
  }

  static createSessionStorage(): IStorage {
    return this.createStorage(sessionStorage);
  }

  static createLocalStorage(): IStorage {
    return this.createStorage(localStorage);
  }
}
