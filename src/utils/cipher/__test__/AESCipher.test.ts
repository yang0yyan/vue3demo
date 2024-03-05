import { describe, expect, it } from "vitest";
import { AESCipher } from "../AESCipher";

const key: string = '_11111000001111@';
const iv: string = '_11111000001111@';
const c = new AESCipher(key, iv)

describe("AESCipher", () => {
    it("加密", () => {
        expect(c.encrypt("你好1")).toBe("v5RrrmIRx8lYuwmMdM/WXg==")
    }, 5000)
    it("解密", () => {
        expect(c.decrypt("zTy1fV6+3IeXWOXYkE7GPQ==")).toBe("你好")
    }, 5000)
})