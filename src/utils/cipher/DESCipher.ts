import CryptoJS from "crypto-js";
import UTF8 from "crypto-js/enc-utf8";

export class DESCipher {
    key: CryptoJS.lib.WordArray;
    constructor(key: string) {
        this.key = UTF8.parse(key);
    }

    // 加密函数
    encrypt(plaintext: string) {
        const encrypted = CryptoJS.DES.encrypt(plaintext, this.key).toString();
        return encrypted;
    }

    // 解密函数
    decrypt(encryptedText: string) {
        const decrypted = CryptoJS.DES.decrypt(encryptedText, this.key).toString(UTF8);
        return decrypted;
    }
}