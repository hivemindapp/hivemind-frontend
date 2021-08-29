describe('All posts view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('When you visit the page, you should see posts', () => {});

  it('If there are no posts, you should see a prompt', () => {});

  it('Each post should show who posted it (avatar and username', () => {});

  it('If it was posted within the past 24 hours it should say posted in hours', () => {});

  it('If it was posted further in the past, it should show the full date', () => {});

  it('should show a title', () => {});

  it('The title should be no longer than X characters', () => {});

  it('If it has an image, it should show the image and no description', () => {});

  it('If it does not have an image, it should show X characters of the description', () => {});

  it('should have a button to upvote and a button to downvote', () => {});

  it('should be able to upvote it and see the number change', () => {});

  it('should be able to downvote it and see the number change', () => {});

  // the order of the page should change after you upvote/downvote it?
  // (is this bad UI??? maybe it shouldn't change right away)
});
