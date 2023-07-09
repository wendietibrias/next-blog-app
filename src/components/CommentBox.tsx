"use client"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import { IAlert } from "@/interfaces/alert.interface";

type CommentProps = {
   slug:string,
   alert:IAlert,
   setAlert:any
}

const CommentBox = ({
  slug ,
  alert,
  setAlert
} : CommentProps) => {

    const { register,handleSubmit,formState: { errors },setValue } = useForm();

    const [loading,setLoading] = useState<boolean>(false);

    const submitHandler = async (formData : any) => {
        try {
          setLoading(true);
          const { data } = await axios.post(`http://localhost:3000/api/comment`,{...formData,slug});
          if(data && data.status === 200) {
              setLoading(false);
              setAlert({
                open:true,
                message:"Thankyou for the comment!",
                type:"success"
              });
              setValue('name', '');
              setValue('comment' , '');
              setValue('email', '');

              setTimeout(()=>{
                setAlert({
                  ...alert,
                  open:false
                })
              },2000)
          }
        } catch(err) {
           setAlert({
              open:true,
              type:"error",
              message:"Something wen't wrong"
           });
            setValue('name', '');
            setValue('comment' , '');
            setValue('email', '');
           return err;
        }
    }



    return (
        <div className="w-full py-4  mt-4">
           {alert.open && (
             <div className={`py-2 px-2 mb-3 flex justify-between items-center ${alert.type === 'success' ? 'bg-green-50 text-green-500' : 'bg-red-100 text-red-500'}`}>
               <h4 className="text-sm font-medium">{alert?.message}</h4>
               <button onClick={() => setAlert({...alert,open:false})} className="font-semibold text-[13px]">X</button>
             </div>
           )}
           <h2 className="text-md font-bold dark:text-white">Your Comment</h2>
           <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-y-2 mt-4">
             <div className="w-full flex items-center sm:items-start sm:flex-col sm:gap-y-2 gap-x-2">
               <div className="flex-1 sm:w-full">
                 <input {...register('name', { required:true })} placeholder="Username" type="text" name="name" className={`${errors.username ? 'border-red-400' : 'border-gray-300'} w-full border  text-sm outline-none py-2 px-2 rounded-md`}/>
                 {errors.name && <p className="text-red-400 text-[13px] font-medium mt-1">Username required</p>}
               </div>
                <div className="flex-1 sm:w-full">
                  <input {...register('email', { required:true })} placeholder="Email" type="email" name="email" className={`${errors.email ? 'border-red-400' : ' border-gray-300'} w-full border text-sm outline-none py-2 px-2 rounded-md`}/>
                 {errors.email && <p className="text-red-400 text-[13px] font-medium mt-1">Email required</p>}

                </div>
             </div>
             <div className="w-full">
                <textarea {...register('comment', { required:true })} placeholder="Write comment" className={`w-full border ${errors.comment ? 'border-red-400' : ' border-gray-300'} py-2 px-2 text-sm outline-none resize-none h-[200px] rounded-md`}></textarea>
                {errors.comment && <p className="text-red-400 text-[13px] font-medium mt-1">Comment required</p>}
             </div>
             <button type="submit" className="bg-blue-400 mt-2 text-white font-semibold text-[13px] py-2 px-4">{loading ? "Sending..." : "Submit"}</button>
           </form>
        </div>
    )
}

export default CommentBox;