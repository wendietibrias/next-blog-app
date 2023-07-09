"use client" 
import { useState,useEffect } from "react";
import { IPostResponse } from '@/interfaces/post.interface';
import { getAllPosts } from '@/services/post';
import { PostCard,Banner, RightSection, PostCardSkeleton,HeadSeo } from "@/components";
import useDarkmode from "@/hooks/useDarkmode";


const Home = () => { 

  const [mode,setMode] = useDarkmode();
  const [loading,setLoading] = useState<boolean>(true);
  const [posts,setPosts] = useState<IPostResponse[]>([]);
  
  const fetchData = async () => {
      setLoading(true);
      const responsePosts : any = await getAllPosts();

      if(responsePosts) {
         setPosts(responsePosts?.posts);
         setLoading(false);
      }
  }

  useEffect(()=>{
     fetchData();
     document.title = "Wendi | Home";
  },[]);

  return (
     <div className="w-full flex-1 dark:bg-gray-900">
      <HeadSeo title="Wendi | Home" />
      <Banner/>
       <section className="py-10 sm:w-full sm:px-5 w-[80%] mx-auto">
           <div className="w-full">
           <div className="flex sm:flex-col justify-between items-start gap-x-10">
             {loading ? (
               <div className="w-[70%] sm:w-full sm:grid-cols-1 grid grid-cols-2 gap-3">
                <PostCardSkeleton/>
                <PostCardSkeleton/>
                <PostCardSkeleton/>
                <PostCardSkeleton/>
               </div>
             ) : (
                <div className="sm:w-full sm:grid-cols-1 w-[70%] grid grid-cols-2 gap-3">
                 {Array.isArray(posts) && posts.map((post : IPostResponse , idx : number) => <PostCard post={post} key={idx}/> )}
               </div>
             )}
             <RightSection/>
           </div>
          </div>
       </section>
     </div>
  )
}

export default Home;
