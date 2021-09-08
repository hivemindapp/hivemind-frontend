import { aliasQuery } from '../utils/graphql-test-utils';

describe('Post Details Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getPosts');
        aliasQuery(req, 'getUser');
        aliasQuery(req, 'post');
      }
    );

    cy.visit('http://localhost:3000/').get('.card').first().click();

    cy.wait('@gqlgetPostsQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });

    cy.wait('@gqlgetUserQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });

    cy.wait('@gqlpostQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });
  });

  it('Should have a title', () => {
    cy.get('.post-content-title').should('be.visible');
  });

  // it('Should display the original poster, with posters avatar, and the time of posting.', () => {
  //   cy.get('.user-name')
  //     .should('be.visible')
  //     .get('.avatar')
  //     .should('be.visible');
  // });

  // it('Should display the description', () => {
  //   cy.get('.post-content-description').should('be.visible');
  // });

  // it('Should display the image (if one is available)', () => {
  //   cy.get('.post-content').should('be.visible');
  // });
});
