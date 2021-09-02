import { aliasPostsQuery } from '../utils/graphql-test-utils';

describe('Modal Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      (req) => {
        aliasPostsQuery(req, 'posts');
      }
    );

    cy.visit('http://localhost:3000/').get('.add-post-btn').click();
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

  it('Submit button should close modal and return to homescreen', () => {
    cy.get('.post-submit-btn').click();
    cy.get('.cards-container').should('be.visible');
  });
});
