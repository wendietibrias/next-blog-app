import { Banner } from "@/components";
import Link from "next/link";
import Image from "next/image";
import profile from "../../assets/images/profile.jpg";
import blogTechData from "@/utils/blogTechData";

const page = () => {
    return (
        <div className="w-full flex-1 dark:bg-gray-900">
            <Banner/>
            <div className="w-[80%] sm:w-full sm:px-5 mx-auto py-10">
               <div className="w-[70%] sm:w-full mx-auto">
                  <div className="w-full">
                     <h2 className="text-xl font-bold text-gray-800 dark:text-white uppercase text-center">About me</h2>
                     <div className="flex items-start sm:flex-col sm:items-center sm:mt-5 mt-7 gap-x-6">
                        <Image src={profile} alt="profile" width={280} height={250} className="rounded-md"/>
                        <div className="flex-1 sm:text-center sm:mt-5">
                            <p className="text-sm text-gray-600 dark:text-white">Halo saya adalah seorang lulusan dari SMK Kristen Immanuel Pontianak pada jurusan Teknik Komputer dan Jaringan.</p>
                            <p className="text-sm mt-2 text-gray-600 dark:text-white">Pada saat ini saya sedang aktif mencari lowongan kerja pada bidang yang saya minati yaitu web development.</p>
                            <p className="text-sm mt-2 text-gray-600 dark:text-white">Blog ini adalah personal portofolio yang saya buat dan juga sebagai tempat saya untuk berbagi pengetahuan saya tentang web development.</p>
                           <Link href={`http://localhost:3000/assets/resume/Wendi-Curriculum Vitae.pdf`} download="Curriculum Vitae">
                               <button className="bg-blue-400 text-white text-sm rounded-full font-semibold py-3 px-5 mt-6">Download CV</button>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="mt-8">
                     <h2 className="text-xl font-bold text-gray-800 dark:text-white uppercase text-center">Technology</h2>
                     <div className="mt-7 grid grid-cols-3 sm:grid-cols-1 gap-4">
                        {blogTechData.map((item,idx) => (
                            <div className="w-full bg-slate-100 dark:bg-gray-800 dark:shadow-none py-4 shadow-sm shadow-gray-200 px-2 text-center" key={idx}>
                               <h4 className="text-sm dark:text-white font-semibold">{item.title}</h4>
                               <p className="text-[13px] mt-1 dark:text-white text-gray-500">{item.subtitle}</p>
                            </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default page;