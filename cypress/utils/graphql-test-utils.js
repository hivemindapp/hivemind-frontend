import mockPosts from '../fixtures/mockPosts.json';
import mockUser from '../fixtures/mockUser.json';
// import mockPostDetails from '../fixtures/mockPostDetails.json';

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  );
};

// Alias queries
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName) && operationName === 'getPosts') {
    req.alias = `gql${operationName}Query`;
    req.reply((res) => {
      res.body.data = mockPosts;
    });
  }
  if (hasOperationName(req, 'getUser') && operationName === 'getUser') {
    req.alias = `gql${operationName}Query`;
    req.reply((res) => {
      res.body.data = mockUser;
    });
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};
