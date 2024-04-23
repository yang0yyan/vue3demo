import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import UTF8 from 'crypto-js/enc-utf8';

export class CipherUtil {
  constructor() {}

  static encryptByBase64(cipherText: string) {
    return CryptoJS.enc.Utf8.parse(cipherText).toString(Base64);
  }

  static decodeByBase64(cipherText: string) {
    return CryptoJS.enc.Base64.parse(cipherText).toString(UTF8);
  }

  static encryptBySha256(cipherText: CryptoJS.lib.WordArray | string) {
    return CryptoJS.SHA256(cipherText).toString();
  }

  static encryptByMd5(password: string) {
    return CryptoJS.MD5(password).toString();
  }

  static createWordArray(words: ArrayBuffer) {
    return CryptoJS.lib.WordArray.create(words);
  }
}
