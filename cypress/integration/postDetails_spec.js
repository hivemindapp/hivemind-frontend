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

  it('Should have a title', () => {});

  it('Should display the original poster, with posters avatar, and the time of posting.', () => {});

  it('Should display the description', () => {});

  it('Should display the image (if one is available)', () => {});
});
