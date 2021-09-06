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

    cy.visit('http://localhost:3000/').get('.card').first();
  });
});
