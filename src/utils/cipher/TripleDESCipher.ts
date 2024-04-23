import CryptoJS from 'crypto-js';
import Utf8 from 'crypto-js/enc-utf8';

export class TripleDESCipher {
  key: CryptoJS.lib.WordArray;
  constructor(key: string) {
    this.key = Utf8.parse(key);
  }

  // 加密函数
  encrypt(plaintext: string) {
    const encrypted = CryptoJS.TripleDES.encrypt(plaintext, this.key).toString();
    return encrypted;
  }

  // 解密函数
  decrypt(encryptedText: string) {
    const decrypted = CryptoJS.TripleDES.decrypt(encryptedText, this.key).toString(Utf8);
    return decrypted;
  }
}
