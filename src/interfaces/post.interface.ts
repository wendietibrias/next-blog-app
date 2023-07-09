export interface IPostResponse {
    author: {
        name : string;
        biography:string;
        picture: {
            url:string;
        }
    }
    slug:string;
    title:string;
    excerpt:string;
    content:string;
    category: {
        title:string;
        slug:string;
    }
    coverImage: {
        url:string;
    }
    createdAt:string;
}