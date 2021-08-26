describe("Navigation Bar", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it ("Should display a header and a logo", () => {
        cy.get("h1").contains("HiveMind")
        .get(".logo").should('be.visible')
    })
})