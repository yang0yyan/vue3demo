/**
 * 持久化缓存工具
 * 选择LocalStorage或SessionStorage进行数据存储
 * 设置前缀：可以为不同的项目设置不同的前缀，避免冲突 (import.meta.env.VITE_PROJECT_NAME)
 * 数据加密：对开发环境的缓存加密（防止敏感数据被窃取）
 * 过期清除：设置数据的保存时长(防止部分数据失效导致功能异常)
 */
import { AESCipher } from '../cipher/AESCipher';
import type { CacheEnum } from './CacheEnum';
import type { IStorage } from './IStorage';

export class StorageCache implements IStorage {
  private aesCipher: AESCipher | null;
  private prefixKey: string;
  private storage: Storage;
  private timeout = null;
  private constructor(storage: Storage, prefixKey: string, aesCipher: AESCipher | null) {
    this.aesCipher = aesCipher;
    this.prefixKey = prefixKey;
    this.storage = storage;
  }

  set(key: CacheEnum, value: any, expire: number | null = this.timeout): void {
    const stringData = JSON.stringify({
      value,
      time: Date.now(), // 当前时间
      expire: expire ? new Date().getTime() + expire * 1000 : null, // 过期时间
    });
    const stringifyValue = this.aesCipher ? this.aesCipher.encrypt(stringData) : stringData;
    this.storage.setItem(this.getKey(key), stringifyValue);
  }
  get(key: CacheEnum, def: any): any {
    const val = this.storage.getItem(this.getKey(key));
    if (!val) return def;
    try {
      const decVal = this.aesCipher ? this.aesCipher.decrypt(val) : val;
      const data = JSON.parse(decVal);
      const { value, expire } = data;
      if (expire === null || expire === undefined || expire >= new Date().getTime()) {
        return value;
      }
      // 过期清除
      this.remove(key);
    } catch (e) {
      return def;
    }
  }
  remove(key: CacheEnum): void {
    this.storage.removeItem(this.getKey(key));
  }
  clear(): void {
    this.storage.clear();
  }

  getKey(key: string) {
    return `${this.prefixKey}_${key}`.toUpperCase();
  }

  public static Builder = class Builder {
    private key: string = '_11111000001111@';
    private iv: string = '_11111000001111@';

    private storage: Storage = sessionStorage;
    private prefixKey: string = '';
    private hasEncrypt: boolean = false;

    setHasEncrypt(hasEncrypt: boolean) {
      this.hasEncrypt = hasEncrypt;
      return this;
    }
    setPrefixKey(prefixKey: string) {
      this.prefixKey = prefixKey;
      return this;
    }
    setStorage(storage: Storage) {
      this.storage = storage;
      return this;
    }

    build(): StorageCache {
      let aesCipher: AESCipher | null = null;
      if (this.hasEncrypt) aesCipher = new AESCipher(this.key, this.iv);

      return new StorageCache(this.storage, this.prefixKey, aesCipher);
    }
  };
}
