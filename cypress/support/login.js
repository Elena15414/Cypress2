const {email, password} = require('../fixtures/example.json')

export function loginReg() {
    cy.visit (' http://qamid.tmweb.ru/admin')
    cy.contains ("Авторизоваться").should("be.visible")
    cy.get ("[for=email] > .login__input").type(email)
    cy.get ("[for=pwd] > .login__input").type(password)
    cy.get (".login__button").click()

}

export default {loginReg};