import { aliasQuery } from '../utils/graphql-test-utils';

describe('All posts view', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      req => {
        aliasQuery(req, 'getPosts');
        aliasQuery(req, 'getUser');
      }
    );

    cy.visit('http://localhost:3000/');
    cy.wait('@gqlgetPostsQuery').then(interception => {
      expect(interception).to.be.an('object');
    });

    cy.wait('@gqlgetUserQuery').then(interception => {
      expect(interception).to.be.an('object');
    });
  });

  it('When you visit the page, you should see posts', () => {
    cy.get('.cards-container').children().should('have.length', 3);
  });

  it('Each post should show who posted it (avatar and username)', () => {
    cy.get('.card').first().contains('Posted by BeeKeeper1');
    cy.get('.card').eq(2).contains('Posted by BeeNoob2');
    cy.get('.avatar').should('be.visible');
  });

  it('should show a title', () => {
    cy.get('.card').first().contains('New research on waxworms');
    cy.get('.card').eq(1).contains('Happy bees');
  });

  it('If it has an image, it should show the image and no description', () => {
    cy.get('.post-img').should('be.visible');
  });

  it('If it does not have an image, it should show the description', () => {
    cy.contains('My bees are swarming, what do I do?');
  });
});
