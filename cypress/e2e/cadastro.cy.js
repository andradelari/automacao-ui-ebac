/// <reference types="cypress"/>

describe('Funcionalidade: Pré-Cadastro', () => {

     beforeEach(() => {
        cy.visit('cadastro.html')
    })

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#nome').type('Larissa')
        cy.get('#email').type('teste@teste.com')
        cy.get('#phone').type('11945632587')
        cy.get('#password').type('SenhaForte123')
        cy.get('.btn-cadastrar').click()
        cy.url().should('include', '/dashboard')
    })
    
})