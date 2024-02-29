import md5 from 'crypto-js/md5';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

export class CipherUtil {
    constructor() { }

    static encryptByBase64(cipherText: string) {
        return UTF8.parse(cipherText).toString(Base64);
    }

    static decodeByBase64(cipherText: string) {
        return Base64.parse(cipherText).toString(UTF8);
    }

    static encryptByMd5(password: string) {
        return md5(password).toString();
    }

}