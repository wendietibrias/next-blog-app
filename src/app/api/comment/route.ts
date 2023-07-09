import { NextRequest, NextResponse } from "next/server";
import request, { GraphQLClient,gql } from "graphql-request";

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODg2MTAyMzgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsanFpeGxqazB1OTYwMXRiOHJwdDkyYXYvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImM0ZWUyZTgwLThjNmUtNDk0Zi05OGE1LTM1OGY0MzE0Y2U3MCIsImp0aSI6ImNrYTVqMmVvYjAzdGMwMXdoMGRmZDY3cnkifQ.vl4ngf-vECdgLomOC10yz9iyyLYrsPjMgpDxlR9sN_PZOdsUsInbj_PEeesGLBZcSlVVlSGyUGsgeqQnBXtVaEtchgoinThjhWPVobAJffuqP6TJr4LmuOV60sNRjYV5kbbVhKQPrvNsqm_IuFhYqiFgt0ZyN_9RHCl0GLZYVLWUmZuswFCs5ikoHi1B-TY3xksafDotK42nXDbcxiDSx5rLYdUgF5rOm-RoYWwA3bsQfiuIB2gqSpNQp62NZU0bDIoFdc-jIvCgzb0F3bxtBwrCeo7xUmTLQKX512y57Qil78SRw7ujI2Nfgvml_i88COYxbzBbfnwA40uypeNeVgNNjbqtz5tHaNfG-SRGWx2HcOe1bD9AoStNiS_8SADzxIr9om8t1b0hMYUVTsjzV5SzeYaqWjbySciOh4a6jMT5KvEndoofg7L_Xv0HDpHCGd8WUTQKoc63Ve9C_IcZ4YQZvYDRtIscNykiZTD8fSjUeNGlgrjDyG-ttkE4bYPGfCfk18t5O_u7tzPNluTcAS7RUhl2qHrmfjFlf1IUV6tv7pcPz7dfyy1kNNgiBiTzAdCfadMZpCEykkHIVgrf60KIZJ0lDXRKcz_jwiZTFCJHeEl8ZePd1xg_l-55Nx3PKWjViczlUzBQN5YsOR7cRmGwpv4szzoAIeevrSAJ89U';

const graphqlClient = new GraphQLClient(`${process.env.NEXT_PUBLIC_GRAPH_ENDPOINT}`,{
    headers:{
      authorization:`Bearer ${token}`
    }
});

export async function POST(req : Request) {

   try {
      const res = await req.json();
      
      const mutation = gql`
         mutation createComment(
           $name:String!,
           $email:String!,
           $comment:String!,
           $slug:String!
         ) {
            createComment(
              data:{
                name:$name,
                email:$email,
                comment:$comment,
                post:{ connect:{ slug:$slug } }
              }
            ) {
                name
                comment
                email
                post {
                  slug
                }
            }
         }
      `;

      const dataRequest = {
         name:res?.name,
         email:res?.email,
         comment:res?.comment,
         slug:res?.slug
      }

      const result =  await graphqlClient.request(mutation , dataRequest);

      return NextResponse.json({
          data:result,
          message:"done",
          status:200
      });

   } catch(err : any) {
      return NextResponse.json({
         message:err.message,
         status:500
      });
   }  
}