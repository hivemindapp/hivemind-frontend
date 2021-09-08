describe('Post Details Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      req => {
        if (req.body.operationName === 'getPosts') {
          req.reply({
            body: {
              data: {
                posts: [
                  {
                    __typename: 'post',
                    id: '1',
                    user: {
                      __typename: 'user',
                      id: '11',
                      username: 'BeeKeeper1',
                      avatar:
                        '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce5985ef004c3741b330ac5ed339bd7b9f5ea3a6/test-image3.jpg'
                    },
                    title: 'New research on waxworms',
                    description:
                      'Colony collapse disorder of honey bees, Apis mellifera L., is a global problem with no conclusive cause yet accepted. A previous U.S. Army study identified a DNA virus, invertebrate iridescent virus (IIV-6), and two microsporian pathogens, Nosema apis Zander 1909 and Nosema ceranae Fries et al. 1996, in bee samples from a collapsing hive. A PCR-based study using limited samples failed to confirm IIV-6 in collapsing colonies, causing the finding to be questioned. Here we demonstrate that honey bees are very susceptible to the virus. We observed viral inclusion bodies in the cytoplasm of honey bee brood previously inoculated with IIV-6. Electron microscopy revealed massive numbers of viral particles in cells at 3 days post-inoculation. Viral factories and paracrystalline arrays of particles ~125 nm in diameter were observed. Few cells were spared infection, indicating that honey bee larvae are very susceptible to IIV-6 and most tissues are infected.',
                    imageUrls: [
                      '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbndGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9fa9921b002cbbe877c11063a350d0ff39f0024a/test-image1.jpg',
                      '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd622c27719d4ba09a4c01136e30ffb3277037b3/test-image2.jpg'
                    ],
                    createdAt: '2021-09-01 07:28:22 -0600',
                    upvotes: 5,
                    downvotes: 1
                  },
                  {
                    __typename: 'post',
                    id: '2',
                    user: {
                      __typename: 'user',
                      id: '12',
                      username: 'BeeKeeper1',
                      avatar:
                        '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce5985ef004c3741b330ac5ed339bd7b9f5ea3a6/test-image3.jpg'
                    },
                    title: 'Happy bees',
                    description: 'Look how happy they are!!',
                    imageUrls: [
                      '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce5985ef004c3741b330ac5ed339bd7b9f5ea3a6/test-image3.jpg'
                    ],
                    createdAt: '2021-08-25 12:28:22 -0600',
                    upvotes: 4,
                    downvotes: 2
                  },
                  {
                    __typename: 'post',
                    id: '3',
                    user: {
                      __typename: 'user',
                      id: '22',
                      username: 'BeeNoob2',
                      avatar:
                        '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce5985ef004c3741b330ac5ed339bd7b9f5ea3a6/test-image3.jpg'
                    },
                    title: 'HELP!',
                    description: 'My bees are swarming, what do I do?',
                    imageUrls: [],
                    createdAt: '2021-08-20 18:28:22 -0600',
                    upvotes: 1,
                    downvotes: 3
                  }
                ]
              }
            },
            headers: { 'access-control-allow-origin': '*' }
          });
        }
      }
    );

    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      req => {
        if (req.body.operationName === 'getUser') {
          req.reply({
            body: {
              data: {
                user: {
                  id: '55',
                  username: 'Kat White',
                  region: 'Northeast',
                  biography: 'Hobby beekeeper of 9 years, with 5 hives',
                  avatar:
                    '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbndGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9fa9921b002cbbe877c11063a350d0ff39f0024a/test-image1.jpg'
                }
              }
            },
            headers: { 'access-control-allow-origin': '*' }
          });
        }
      }
    );

    cy.intercept(
      'POST',
      'https://hivemind-staging-branch.herokuapp.com/graphql',
      req => {
        if (req.body.operationName === 'post') {
          req.reply({
            body: {
              data: {
                post: {
                  id: '44',
                  title: 'New research on waxworms.',
                  description:
                    'Colony collapse disorder of honey bees, Apis mellifera L., is a global problem with no conclusive cause yet accepted. A previous U.S. Army study identified a DNA virus, invertebrate iridescent virus (IIV-6), and two microsporian pathogens, Nosema apis Zander 1909 and Nosema ceranae Fries et al. 1996, in bee samples from a collapsing hive. A PCR-based study using limited samples failed to confirm IIV-6 in collapsing colonies, causing the finding to be questioned. Here we demonstrate that honey bees are very susceptible to the virus. We observed viral inclusion bodies in the cytoplasm of honey bee brood previously inoculated with IIV-6. Electron microscopy revealed massive numbers of viral particles in cells at 3 days post-inoculation. Viral factories and paracrystalline arrays of particles ~125 nm in diameter were observed. Few cells were spared infection, indicating that honey bee larvae are very susceptible to IIV-6 and most tissues are infected.',
                  createdAt: '2021-08-20 18:28:22 -0600',
                  imageUrls: [
                    '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbndGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9fa9921b002cbbe877c11063a350d0ff39f0024a/test-image1.jpg',
                    '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd622c27719d4ba09a4c01136e30ffb3277037b3/test-image2.jpg'
                  ],
                  upvotes: 6,
                  downvotes: 7,
                  user: {
                    id: '1',
                    username: 'Moro Burrows',
                    avatar:
                      '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd622c27719d4ba09a4c01136e30ffb3277037b3/test-image2.jpg'
                  },
                  comments: [
                    {
                      id: '2',
                      content: 'Great research, what can I do as a beekeeper',
                      upvotes: 2,
                      downvotes: 6,
                      createdAt: '2021-08-20 18:28:22 -0600',
                      user: {
                        id: '6',
                        username: 'Carcharoth',
                        avatar:
                          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce5985ef004c3741b330ac5ed339bd7b9f5ea3a6/test-image3.jpg'
                      }
                    },
                    {
                      id: '3',
                      content:
                        'I always squish them when I find them, easy peasy',
                      upvotes: 6,
                      downvotes: 1,
                      createdAt: '2021-08-20 18:28:22 -0600',
                      user: {
                        id: '26',
                        username: 'Carcharoth',
                        avatar:
                          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd622c27719d4ba09a4c01136e30ffb3277037b3/test-image2.jpg'
                      }
                    },
                    {
                      id: '5',
                      content:
                        '@BuzzBuzz22 DO NOT DO THAT, it spreads the virus through the whole hive. Remove from the hike and soak in alcohol instead.',
                      upvotes: 3,
                      downvotes: 4,
                      createdAt: '2021-08-20 18:28:22 -0600',
                      user: {
                        id: '2',
                        username: 'Carcharoth',
                        avatar:
                          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd622c27719d4ba09a4c01136e30ffb3277037b3/test-image2.jpg'
                      }
                    }
                  ]
                }
              }
            },
            headers: { 'access-control-allow-origin': '*' }
          });
        }
      }
    );

    cy.visit('http://localhost:3000/').get('.card').first().click();
  });

  it('Should have a title', () => {
    cy.get('.post-content-title').should('be.visible');
  });

  it('Should display the original poster, with posters avatar, and the time of posting.', () => {
    cy.get('.user-name')
      .should('be.visible')
      .get('.avatar')
      .should('be.visible');
  });

  it('Should display the description', () => {
    cy.get('.post-content-description').should('be.visible');
  });

  it('Should display the image (if one is available)', () => {
    cy.get('.post-content').should('be.visible');
  });
});
