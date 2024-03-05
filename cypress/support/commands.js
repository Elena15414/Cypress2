
 Cypress.Commands.add('login', (email, password) => { 
    cy.get ("[for=email] > .login__input").type(email)
    cy.get ("[for=pwd] > .login__input").type(password)
    cy.get (".login__button").click()
  })

  
  Cypress.Commands.add("addNewBook", (title, description, authors) => {

    cy.contains("Add new").click();
  
    cy.get("#title").type(title);
  
    cy.get("#description").type(description);
  
    cy.get("#authors").type(authors);
  
    cy.contains("Submit").click();
  
  });