import { request, gql } from 'graphql-request';

const getAllPosts = async () => {
     try {
        const query = gql`
           query MyQuery {
            posts {
                author {
                id
                name
                biography
                picture {
                    url
                }
                }
                slug
                title
                excerpt
                content {
                html
                }
                category {
                title
                slug
                id
                }
                coverImage {
                url
                id
                }
                createdAt
             }
           }
        `;

        const result = await request(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`, query);

        return result;
         
     } catch(err) {
       return err;
     }
}

const getDetailPost = async (slug : string) => {
   try {
      const query = gql`
         query MyQuery($slug : String!) {
         post(where:{ slug:$slug }) {
            slug
            tags
            title
            excerpt
            comments {
               name
               comment
               createdAt
            }
            content {
               html
            }
            createdAt
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
            coverImage {
               url
            }
         }
         }
      `;

      const result = await request(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`, query, { slug });

      return result;

   } catch(err) {
      return err;
   }
}

const getRecentPosts = async () => {
     try {
       const query = gql`
          query getRecentPosts() {
               posts(orderBy: createdAt_ASC, first: 5) {
                  author {
                     name
                     biography
                     picture {
                     url
                     }
                  }
                  slug
                  title
                  excerpt
                   category {
                     title
                     slug
                  }
                  coverImage {
                     url
                  }
                  createdAt
               }
          }
       `;

       const result = await request(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}` ,query);
       return result;

     } catch(err) {
        return err;
     }
}


export {
    getAllPosts,
    getDetailPost,
    getRecentPosts
}