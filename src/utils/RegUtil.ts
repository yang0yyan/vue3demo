export class RegUtil {
  static expLink() {
    return /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:@&?=+,.!/~%$#]*)?)$/i;
  }

  // 密码至少包含大小写字母，数字，特殊符号(~!@#$%^&*._/-)，长度为8-20个字符
  static expPassword() {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*._/-]).{8,20}$/g;
  }
  // 中国大陆的手机号码通用正则表达式
  // 1开头，第二位数范围3~9，后面9位随意
  static expPhone() {
    return /^1[3-9]\d{9}$/g;
  }
  /**
   * 邮箱的规则是：名称@域名
   * 邮箱名称的规则：由英文字母、数字、下划线组成。  名称：\w+
   * 邮箱域名的规则：由英文字母、数字、下划线、"."组成。 域名： \w+(\.\w+)+
   * @returns RegExp
   */
  static expEmail() {
    return /^\w+@\w+(\.\w+)+$/g;
  }

  // 省份证校验：https://blog.csdn.net/weixin_44232308/article/details/103904821

  // 校验是否成立
  static test(str: string, regular: RegExp) {
    return regular.test(str);
  }
}
