import CryptoJS from 'crypto-js';
import UTF8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js/aes';
import pkcs7 from 'crypto-js/pad-pkcs7';
import ECB from 'crypto-js/mode-ecb';

export class AESCipher {
  key: CryptoJS.lib.WordArray;
  vi: CryptoJS.lib.WordArray;

  constructor(key: string, vi: string) {
    this.key = UTF8.parse(key);
    this.vi = UTF8.parse(vi);
  }

  private get options() {
    return {
      mode: ECB,
      padding: pkcs7,
      vi: this.vi,
    };
  }

  // 加密函数
  encrypt(plaintext: string) {
    const encrypted = AES.encrypt(plaintext, this.key, this.options).toString();
    return encrypted;
  }

  // 解密函数（可选）
  decrypt(encryptedText: string) {
    const decrypted = AES.decrypt(encryptedText, this.key, this.options).toString(UTF8);
    return decrypted;
  }
}
