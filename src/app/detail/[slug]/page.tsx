'use client'
import { AiOutlineCalendar } from "react-icons/ai";
import { IPostResponse } from "@/interfaces/post.interface";
import { getDetailPost } from "@/services/post";
import { useParams } from "next/navigation";
import { useState,useEffect } from "react";
import { Banner, RightSection,AuthorBox, CommentBox } from "@/components";
import Link from "next/link";
import { IAlert } from "@/interfaces/alert.interface";

const page = () => {

    const [alert,setAlert] = useState<IAlert>({
         message:"Thankyou for send comment!",
         open:false,
         type:"success"
    });
    const [post,setPost] = useState<IPostResponse | any>(null)
    const [loading,setLoading] = useState<boolean>(true);
 
    const params = useParams();

    const fetchPost = async () => {
         setLoading(true);
         const detailPost : any = await getDetailPost(`${params.slug}`);

         if(detailPost) {
             setPost(detailPost?.post);
             setLoading(false);
         }
    }

    useEffect(() => {
       fetchPost();
    },[])

    return (
        <div className="w-full">
            <Banner/>
            <section className="w-[80%] sm:w-full py-12 sm:px-5 mx-auto flex sm:flex-col items-start gap-x-8">
                {loading ? (
                    <div className="w-[70%] sm:w-full">
                       <div className="w-full h-[450px] skeleton-box"></div>
                       <div className="w-full flex items-center gap-x-4 py-2">
                         <div className="skeleton-box w-[150px] h-[12px]"></div>
                         <div className="skeleton-box w-[80px] h-[12px]"></div>
                       </div>
                       <div className="w-full h-[20px] mt-5 skeleton-box"></div>
                       <div className="w-full">
                         <div className="skeleton-box w-[80%] h-[12px]"></div>
                         <div className="skeleton-box w-[80%] h-[12px]"></div>
                         <div className="skeleton-box w-[80%] h-[12px]"></div>
                       </div>
                    </div>
                ) : (
                <div className="w-[75%] sm:w-full">
                    <img src={post?.coverImage?.url} alt={post?.title} className="w-full h-[450px] sm:h-[350px]"/>
                    <div className="flex items-center gap-x-4 py-4">
                    <Link href={`/category/${post?.category?.slug}`}>
                        <button className="bg-blue-400 text-white font-semibold text-[13px] py-1 px-3 rounded-full">{post?.category?.title}</button>
                    </Link>
                   <span className="flex items-center gap-x-2 text-gray-500 text-[13px] leading-none">
                    <AiOutlineCalendar className='text-lg' />
                    {new Date(post?.createdAt).toDateString()}
                    </span>
                    </div>
                  <h2 className="text-xl  font-bold text-gray-800 dark:text-white">{post?.title}</h2>
                  <div className='mt-3 blog-content dark:text-white' dangerouslySetInnerHTML={{ __html:post?.content?.html }}></div>
                   <AuthorBox author={post?.author} />
                   <CommentBox setAlert={setAlert} alert={alert} slug={post?.slug}/>
                </div>
                )}
                <RightSection/>
            </section>
        </div>
    )
}

export default page;