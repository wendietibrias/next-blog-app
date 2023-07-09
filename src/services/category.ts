import { request, gql } from 'graphql-request';

const getAllCategories = async () => {
    try {
        const queryData = gql`
          query MyQuery {
          categories {
            title
            slug
            id
            createdAt
        }
      }
     `;

     const result = await request( `${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`,queryData);
     return result;

    } catch(err) {
        return err;
    }
}

 const getPostByCategories = async (slug : string) => {
     try {
        const query = gql`
           query MyQuery($slug:String!) {
            posts(where: {category: {slug_contains:$slug}}) {
                author {
                biography
                name
                picture {
                    url
                }
                }
                category {
                slug
                title
                }
                excerpt
                title
                slug
                createdAt
                coverImage {
                url
              }
            }
           }
        `;

        const result = await request(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`,query , { slug });

        return result;

     } catch(err) {
        return err;
     }
 }

export {
    getAllCategories,
    getPostByCategories
}