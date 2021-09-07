import { aliasQuery } from '../utils/graphql-test-utils';

describe('Modal Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getPosts');
        aliasQuery(req, 'getUser');
      }
    );

    cy.visit('http://localhost:3000/').get('.add-post-button').click();
    cy.wait('@gqlgetPostsQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });
  });

  it('Should open a modal upon clicking Add a Post!', () => {
    cy.get('.modal-content').should('be.visible');
  });

  it('Should contain an input form for title', () => {
    cy.get('.title-input').should('be.visible');
  });

  it('Should contain an input form for description', () => {
    cy.get('.description-input').should('be.visible');
  });

  it('Should contain an input to add images', () => {
    cy.get('.ImageUploader').should('be.visible');
  });

  it('Should contain an submit button', () => {
    cy.get('.post-submit-btn').should('be.visible');
  });

  it('Submit button should close modal and return to homescreen', () => {
    cy.get('.post-submit-btn').click();
    cy.get('.cards-container').should('be.visible');
  });

  it('Should be able to submit a post with a title, description, and image', () => {
    cy.get('.title-input')
      .type('I love bees')
      .should('have.value', 'I love bees')
      .get('.description-input')
      .type('Bees are my only friends')
      .should('have.value', 'Bees are my only friends');
  });

  it('Should be able to submit a post without an image', () => {
    cy.get('.title-input')
      .type('I love bees')
      .should('have.value', 'I love bees')
      .get('.description-input')
      .type('Bees are my only friends')
      .get('.post-submit-btn')
      .click();
    cy.get('.card').first().should('be.visible');
  });
});
