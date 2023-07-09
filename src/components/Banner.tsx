
const Banner = () => {
    return (
      <section className="w-full bg-slate-100 dark:bg-gray-900/90 py-7 flex flex-col items-center">
         <div className="text-center">
          <h2 className="mt-3 font-bold text-gray-800 dark:text-white uppercase text-[26px] leading-8">Wendi Blog</h2>
          <p className="text-gray-400 dark:text-white font-normal text-sm mt-[4px]">
           Fullstack Web Developer | React.js | Nest.js
          </p>
          {/* <Link href="../assets/resume/Wendi-Curriculum Vitae.pdf" target="_blank" download="Wendi-Curriculum Vitae">
            <button className="bg-blue-400 text-white text-[13px] mt-5 font-semibold py-2 px-4 cursor-pointer rounded-[4px]">See More</button>
          </Link> */}
         </div>
       </section>
    )
}

export default Banner;