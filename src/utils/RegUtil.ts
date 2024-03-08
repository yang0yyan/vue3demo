export class RegUtil {
    static expLink() {
        return /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:@&?=+,.!/~%$#]*)?)$/i;
    }

    // 密码至少包含大小写字母，数字，特殊符号(~!@#$%^&*._/-)，长度为8-20个字符
    static expPassword() {
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*._/-]).{8,20}$/g;
    }
    // 中国大陆的手机号码通用正则表达式
    static expPhone() {
        return /^1[3-9]\d{9}$/g;
    }

    // 校验是成立
    static test(str: string, regular: RegExp) {
        return regular.test(str)
    }
}