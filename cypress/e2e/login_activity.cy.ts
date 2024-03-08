describe('登陆页面', () => {
  it('访问登陆页面', () => {
    cy.visit('/login');
    cy.get('.title').should("have.text", "满天星网评系统");
  })
  it("空校验", () => {
    cy.get('.el-button').click()
    cy.get(':nth-child(1) > .el-form-item__content > .el-form-item__error').should("have.text", "请输入手机号码")
    cy.get(':nth-child(2) > .el-form-item__content > .el-form-item__error').should("have.text", "请输入登录密码")
    cy.get(':nth-child(3) > .el-form-item__content > .el-form-item__error').should("have.text", "请输入图形验证码")
  })
  it("错误校验", () => {
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__inner').focus().type("11")
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__inner').focus().type("11")
    cy.get('.el-button').click()
    cy.get(':nth-child(1) > .el-form-item__content > .el-form-item__error').should("have.text", "请输入正确的手机号码")
    cy.get(':nth-child(2) > .el-form-item__content > .el-form-item__error').should("have.text", "密码至少包含大小写字母，数字，特殊符号(~!@#$%^&*._/-)，长度为8-20个字符")
  })
  it("正确校验", () => {
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__inner').focus().clear().type("18210992622")
    cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__wrapper > .el-input__inner').focus().clear().type("Cetc28.com")
    cy.get('.el-col-16 > .el-input > .el-input__wrapper > .el-input__inner').focus().clear().type("1")
    cy.get('.el-col-16 > .el-input > .el-input__wrapper > .el-input__inner').focus().blur()

    cy.get(':nth-child(1) > .el-form-item__content').children().should("not.have.class", "el-form-item__error")
    cy.get(':nth-child(2) > .el-form-item__content').children().should("not.have.class", "el-form-item__error")
    cy.get(':nth-child(3) > .el-form-item__content').children().should("not.have.class", "el-form-item__error")
    cy.get('.el-button').click()
  })
})