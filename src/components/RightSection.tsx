"use client"
import { AiOutlineCalendar } from "react-icons/ai";
import { getAllCategories } from "@/services/category";
import { ICategory } from "@/interfaces/category.interface";
import { useState,useEffect } from 'react';
import { IPostResponse } from "@/interfaces/post.interface";
import { getRecentPosts } from "@/services/post";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

const RightSection = () => {
    const pathname = usePathname();
    const countSkeleton = [1,2,3,4];

    const [loading,setLoading] = useState<boolean>(true);
    const [recentPosts, setRecentPosts] = useState<IPostResponse[]>([]);
    const [categories,setCategories] = useState<ICategory[]>([]);

    const fetchData = async () => {
         setLoading(true);
         const allCategories : any = await getAllCategories();
         const allRecentPosts : any = await getRecentPosts();

         if(allCategories && allRecentPosts) {
            setCategories(allCategories.categories);
            setRecentPosts(allRecentPosts.posts);
            setLoading(false);
         } 
    }

    useEffect(() =>  {
       fetchData();
    },[]);



    return (
        <div className="w-[30%] sm:w-full sm:mt-10">
         <div className="w-full">
         <h2 className="text-[18px] uppercase font-bold text-gray-800 dark:text-white">Categories</h2>
            {loading ? (
               <div className="w-full mt-3">
                   <div className="skeleton-box w-full h-[20px]"></div>
                   <div className="skeleton-box w-full h-[20px]"></div>

               </div>
            ) : (
               <div className="mt-3 flex flex-col gap-y-2">
            {Array.isArray(categories) && categories.map((category : ICategory, idx : number) => (
               <Link key={idx} href={`/category/${category?.slug}`}>
               <button className={`w-full text-left pb-2 font-medium dark:text-white text-sm border-b border-gray-200 ${pathname.includes(category?.slug) ? 'text-blue-400' : ''}`}>{category?.title}</button>
               </Link>
            ))}
            </div>
            )}
         </div>
         <div className="mt-6">
         <h2 className="text-[18px] uppercase font-bold text-gray-800 dark:text-white">Recent Posts</h2>
         {loading ? (
            <div className="w-full flex flex-col gap-y-3 mt-4">
                {countSkeleton.map((count : number) => (
                   <div key={count} className="flex items-start gap-x-4">
                      <div className="skeleton-box w-[140px] h-[140px]"></div>
                       <div className="flex-1 flex flex-col gap-y-1">
                         <div className="w-full h-[20px] skeleton-box"></div>
                         <div className="w-[80%] h-[10px] skeleton-box"></div>
                       </div>
                   </div>
                ))}
            </div>
         ) : (
               <div className="mt-4 flex flex-col gap-y-4">
               {Array.isArray(recentPosts) && recentPosts.map((post : IPostResponse , idx : number) => (
                  <Link href={`/detail/${post?.slug}`} key={idx}>
                     <div className="w-full flex items-start gap-x-4">
                     <Image src={`${post?.coverImage?.url}`} alt={post?.title} width={140} height={140} />
                     <div className="flex-1 flex flex-col gap-y-[6px]">
                        <h4 className="text-[13px] font-semibold text-gray-800 dark:text-white w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">{post?.title}</h4>
                           <span className="flex items-center gap-x-2 text-gray-500 text-[12px] leading-none">
                           <AiOutlineCalendar className='text-md' />
                           {new Date(post?.createdAt).toDateString()}
                        </span>
                           <Link href="/">
                           <span className="bg-blue-400 text-white rounded-full py-1 px-2 font-semibold text-[10px]">{post?.category?.title}</span>
                        </Link>
                     </div>
                  </div>
                  </Link>
               ))}
            </div>
         )}
         </div>
         </div>
    )
}

export default RightSection;