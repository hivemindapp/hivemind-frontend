describe('Navigation Bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/').click('.add-post-btn');
  });

  it('Should open a modal upon clicking Add a Post!', () => {
    cy.get('.modal-content').should('be.visible');
  });

  it('Should contain an input form for title', () => {
    cy.get('.post-title').should('be.visible');
  });

  it('Should contain an input form for description', () => {
    cy.get('.post-description').should('be.visible');
  });

  it('Should contain an input to add images', () => {
    cy.get('.upload__image-wrapper').should('be.visible');
  });

  it('Should contain an option to remove images', () => {
    cy.get('.remove-img-btn').should('be.visible');
  });

  it('Should contain an submit button', () => {
    cy.get('.post-submit-btn').should('be.visible');
  });

  it('Submit button should close modal and return to homescreen with new post at the top', () => {
    cy.get('.post-submit-btn')
      .click()
      .get('.modal-content')
      .should('not.be.visible');
  });
});
