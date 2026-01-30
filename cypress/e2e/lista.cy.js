/// <reference types="cypress"/>

describe('Funcionalidade: Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos.html')
    })

    it('Deve validar a lista de produtos', () => {
        cy.get('.lista-produtos').should('be.visible')
        cy.get('.produto-item').should('have.length', 4)
    })

    it('Deve buscar um produto com sucesso', () => {
        cy.get('#search-bar').type('Celular')
        cy.get('.icon-search').click()
        cy.get('.nome-produto').should('contain', 'Celular')
    })

    it('Deve selecionar apenas um produto da lista', () => {
        cy.get('.produto-item').contains('Notebook Gamer').click()
        cy.get('.titulo-detalhe').should('have.text', 'Notebook Gamer')
    })

    it('Deve adicionar vários itens ao carrinho', () => {
        cy.get('.btn-adicionar-carrinho').first().click()
        cy.get('.btn-adicionar-carrinho').eq(2).click()
        cy.get('.btn-adicionar-carrinho').last().click()
        cy.get('.carrinho-contador').should('contain', '3')
    })
})