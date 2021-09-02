import mockPosts from '../fixtures/mockPosts.json';

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return body.hasOwnProperty('query') && body.query.includes(operationName);
};

// Alias Posts query if operationName matches
export const aliasPostsQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.reply((res) => {
      res.body.data = mockPosts;
    });
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};
