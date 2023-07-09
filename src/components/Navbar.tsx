'use client'
import { PiPenNibStraight } from 'react-icons/pi';
import { LiaMoonSolid } from 'react-icons/lia';
import { WiDaySunny } from "react-icons/wi";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import useDarkmode from '@/hooks/useDarkmode';

type NavbarProps = {
    mode:string;
    setMode:any;
}

const Navbar = ({
    mode,
    setMode 
} : NavbarProps) => {
    const pathname = usePathname();

    return (
        <nav className="w-full bg-white dark:bg-gray-900 transition-all">
            <div className="w-[80%] sm:px-5 sm:w-full mx-auto py-3 flex justify-between items-center">
                <div className="flex items-center">
                 <Link className="flex items-center gap-x-1" href="/">
                    <PiPenNibStraight className="text-[22px] text-gray-800 dark:text-white"/>
                    <span className="uppercase text-lg text-gray-800 dark:text-white font-extrabold">Wendi.</span>
                 </Link>
                 <div className="flex items-center gap-x-3 ml-7 sm:hidden">
                     <Link href="/about"><span className={`font-semibold  text-[13px] ${pathname === '/about' ? 'text-blue-400' : 'text-gray-800 dark:text-white'}`}>About</span></Link>
                     <Link href="/contact"><span className={`font-semibold  dark:text-white text-[13px] ${pathname === '/contact' ? 'text-blue-400' : 'text-gray-800'}`}>Contact</span></Link>
                 </div>
                </div>
                <div className="flex items-center gap-x-4">
                   {mode === "light" ? (
                     <button onClick={() => setMode("dark")} className="text-gray-800 dark:text-white text-[12px] font-semibold leading-none flex items-center gap-x-2">
                        <LiaMoonSolid className="text-xl"/>
                        Dark mode
                    </button>
                   ) : (
                     <button onClick={()=>setMode("light")} className="text-gray-800 dark:text-white text-[12px] font-semibold leading-none flex items-center gap-x-2">
                        <WiDaySunny className="text-xl"/>
                        Light mode
                    </button>
                   )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;