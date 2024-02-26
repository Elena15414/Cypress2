describe('template spec', () => {
  
   it('download page', () => {
    cy.visit ("https://qamid.tmweb.ru/client/index.php")
    cy.get (".page-nav__day").should("have.length", 7)
    cy.get (".page-header__title").should("be.visible")
    cy.contains ("Зверополис").should("be.visible")
  })
})