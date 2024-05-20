import { GraphQLClient, gql } from 'graphql-request';

export const hygraph = new GraphQLClient(
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clvgziiuh000001w68mn115st/master',
);

export const exampleRequestGQL = async () => {
  const QUERY = gql`
    {
      posts {
        id
        title
      }
    }
  `;
  const { posts } = await hygraph.request(QUERY) as any;

};
