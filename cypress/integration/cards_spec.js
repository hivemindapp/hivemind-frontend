import { aliasPostsQuery } from '../utils/graphql-test-utils';

describe('All posts view', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      req => {
        aliasPostsQuery(req, 'posts');
      }
    );
    cy.visit('http://localhost:3000/');
  });

  it('When you visit the page, you should see posts', () => {
    cy.get('.cards-container').children().should('have.length', 3);
  });

  it('Each post should show who posted it (avatar and username)', () => {
    cy.contains('Posted by BeeKeeper1');
    cy.contains('BeeNoob2');
    cy.get('.avatar').should('be.visible');
  });

  it('If it was posted further in the past, it should show the full date', () => {
    cy.contains('at 6:28 pm on August 20, 2021');
  });

  it('should show a title', () => {
    cy.get('h2').contains('New research on waxworms');
    cy.get('h2').contains('Happy bees');
  });

  it('If it has an image, it should show the image and no description', () => {
    cy.get('.post-img').should('be.visible');
  });

  it('If it does not have an image, it should show the description', () => {
    cy.contains('My bees are swarming, what do I do?');
  });

  // not sure how to assert # of characters
  it.skip('If it does not have an image, it should only show X characters of the description', () => {});

  // not sure how to mock this out
  it.skip('If there are no posts, you should see a prompt', () => {});

  //skipping for now because I'm not sure how to make this test consistently pass without changing the mockPosts
  it.skip('If it was posted within the past 24 hours it should say posted in hours', () => {
    cy.contains('1 hr ago');
  });

  //skipping for now because I'm not sure how to make this test consistently pass based on Date.now()
  it.skip('If it was posted within the past hour it should say just now', () => {
    cy.contains('just now');
  });

  // skipping last 3 because we don't have these buttons yet
  it.skip('should have a button to upvote and a button to downvote', () => {});

  it.skip('should be able to upvote it and see the number change', () => {});

  it.skip('should be able to downvote it and see the number change', () => {});
});
