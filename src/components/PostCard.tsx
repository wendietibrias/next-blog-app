import { AiOutlineCalendar } from 'react-icons/ai';
import { IPostResponse } from '@/interfaces/post.interface';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type PostProps = {
    post:IPostResponse
}

const PostCard = ({ post } : PostProps) => {
  return (
    <Link href={`/detail/${post?.slug}`}>
      <div className='w-full shadow-xl shadow-gray-200 dark:shadow-none dark:bg-gray-900 overflow-hidden rounded-sm'>
       <img src={post?.coverImage?.url} alt={post?.title} />
       <div className="pt-5 pb-4 px-3">
        <div className="flex items-center gap-x-4">
           <Link href="/">
           <span className="bg-blue-400 text-white rounded-full py-1 px-2 font-semibold text-[12px]">{post?.category?.title}</span>
         </Link>
         <span className="flex items-center gap-x-2 dark:text-white text-gray-500 text-[13px] leading-none">
          <AiOutlineCalendar className='text-lg' />
          {new Date(post?.createdAt).toDateString()}
         </span>
        </div>
         <h2 className="text-md font-bold mt-3 text-gray-800 dark:text-white">{post?.title}</h2>
         <p className="text-[12px] mt-[6px] text-gray-400 dark:text-white">{post?.excerpt}</p>
         <div className="flex items-center gap-x-4 mt-4 mb-2">
           <Image  src={post?.author?.picture?.url} alt={post?.author?.name} width={40} height={40} className="rounded-full"  />
           <div>
            <h5 className='text-sm font-bold text-gray-800 dark:text-white'>{post?.author?.name}</h5>
            <p className="text-[12px] text-gray-400 dark:text-white font-normal">Writter</p>
          </div>
         </div>
       </div>
    </div>
    </Link>
  )
}

export default PostCard