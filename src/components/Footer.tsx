import { AiFillLinkedin,AiFillInstagram,AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full py-3 bg-gray-800 text-white">
            <p className="text-center text-[13px] font-medium">Create by <span className='text-blue-400 font-semibold'>Wenditiberias</span></p>
            <div className="flex justify-center items-center gap-x-3 mt-2 text-white">
              <Link target="_blank" href="https://www.linkedin.com/in/wendi-tiberias-a1b73a280/">
                <AiFillLinkedin className='text-2xl'/>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/wentbrias/">
                <AiFillInstagram className='text-2xl'/>
              </Link>
                   <Link target="_blank" href="https://github.com/wendietibrias?tab=repositories">
                <AiOutlineGithub className='text-2xl'/>
              </Link>
            </div>
        </footer>
    )
}

export default Footer;