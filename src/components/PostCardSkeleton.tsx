import React from 'react';

const PostCardSkeleton = () => {
  return (
    <div className="w-full">
        <div className="skeleton-box w-full h-[250px]"></div>
        <div className="py-3 pr-3">
            <div className='skeleton-box w-full h-[20px]'></div>
            <div className="skeleton-box w-[85%] h-[10px] mt-3"></div>
            <div className="skeleton-box w-[85%] h-[10px]"></div>
        </div>
    </div>
  )
}

export default PostCardSkeleton