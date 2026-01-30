/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

      beforeEach(() => {
        cy.visit('login.html')
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#usuario').type('aluno_ebac')
        cy.get('#senha').type('teste123')
        cy.get('#btn-entrar').click()
        cy.get('#mensagem-sucesso').should('contain', 'Bem vindo')
    })

})