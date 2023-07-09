"use client"
import { useState,useEffect } from 'react';
import { useParams } from "next/navigation";
import { getPostByCategories } from '@/services/category';
import { Banner, PostCard, RightSection,PostCardSkeleton } from '@/components';
import { IPostResponse } from '@/interfaces/post.interface';

const page = () => {
    const params = useParams();
 
    const [loading,setLoading] = useState<boolean>(true);
    const [posts,setPosts] = useState<IPostResponse[]>([]);

    const fetchPostByCategory = async () => {
        setLoading(true);
        const getPostByCategory : any = await getPostByCategories(params.slug);

        if(getPostByCategory) {
            setPosts(getPostByCategory.posts);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPostByCategory();
    }, []);

    return (
        <div className="w-full flex-1 dark:bg-gray-900">
            <Banner/>
            <div className="w-[80%] sm:w-full sm:px-5 py-10 mx-auto">
               <div className="w-full  flex items-start sm:flex-col gap-x-8">
                 {loading ? (
                    <div className="w-[70%] sm:w-full sm:grid-cols-1 grid grid-cols-2 gap-3">
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                        <PostCardSkeleton/>
                    </div>
                 ) : (
                  <div className="w-[70%] sm:w-full">
                    <h2 className="text-gray-800 text-lg font-bold uppercase dark:text-white">Category {params?.slug}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mt-6">
                        {Array.isArray(posts) && posts.map((post : IPostResponse , idx : number) => <PostCard post={post} key={idx}/>)}
                    </div>
                   </div>
                 )}
                 <RightSection/>
               </div>
            </div>
        </div>
    )
}

export default page;