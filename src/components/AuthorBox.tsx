import { IAuthorResponse } from "@/interfaces/author.interface";
import Image from "next/image";

type AuthorProps = {
    author : IAuthorResponse
}

const AuthorBox = ({
    author 
} : AuthorProps) => {
    return (
          <div className="bg-slate-50 dark:bg-gray-900 rounded-md mt-10 py-5 px-5 flex justify-center items-center flex-col text-center gap-y-1">
                <Image src={author?.picture?.url} alt={author?.name} width={80} height={80} className="rounded-full border-4 border-blue-400"/>
                <h5 className="text-xl mt-2 dark:text-white font-semibold">{author?.name}</h5>
                <p className="text-[13px] text-gray-600 dark:text-white">{author?.biography}</p>
            </div>
    )
}

export default AuthorBox;