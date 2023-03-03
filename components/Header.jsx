import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { BsSearch, BsFillLightningChargeFill } from 'react-icons/bs'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useTheme } from "next-themes";
import { CiLight } from 'react-icons/ci'

const Header = () => {
    const [showToolTip, setShowToolTip] = useState(false);
    const { theme, setTheme } = useTheme();


    return (
        <header className='shadow bg-white relative z-50 dark:bg-gray-800 dark:text-white border-b-[1px] border-transparent dark:border-gray-700 '>
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center ">
                        <Image src="/cricket-crease-logo.png" className='h-16 w-16' height={100} width={100} priority={true} alt="cricket-crease-logo" />
                        <div className="info">
                            <h1 className='leading-tight m-0 font-bold uppercase text-xl text-red-700'>Cricket Crease</h1>
                            <p className='leading-tight text-sm text-slate-400 dark:text-white'>Nepali Cricket Blog</p>
                        </div>
                    </div>
                </Link>
                <form action="" className="flex relative">
                    <input type="text" placeholder="Search Matches, Players" className="text-sm rounded-full w-[250px] border-[1px] border-gray-200 ring-0 outline-none px-5 py-2 dark:bg-gray-700 dark:border-transparent" />
                    <button className="p-2 absolute right-2 top-0 h-[100%]">
                        <BsSearch />
                    </button>
                </form>
                <nav>
                    <ul className='text-sm capitalize text-slate-600 dark:text-white flex gap-5'>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Matches</Link>
                        </li>
                        <li>
                            <Link href={'/'}>News</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Players</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Teams</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="text-sm capitalize items-center text-slate-600 dark:text-white flex gap-5">
                    <Link href={'/'}>

                        <li className='relative cursor-pointer group' onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
                            <BsFacebook />
                            <span class="absolute z-30 hidden group-hover:flex right-[100%] translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-r-transparent before:border-l-gray-700">Follow us on Facebook</span>
                        </li>
                    </Link>
                    <Link href={'/'}>
                        <li className='relative cursor-pointer group' onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}>
                            <BsTwitter />
                            <span
                                class="absolute z-30 hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700">Follow us on Twitter</span>
                        </li>
                    </Link>
                    <div className="divider h-4 w-[1px] bg-slate-200 dark:bg-gray-500"></div>
                    <Link href={'/'}>
                        <li className='cursor-pointer relative group' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === 'dark' ?
                                <BsFillLightningChargeFill />
                                :
                                <MdDarkMode />
                            }
                            <span class="absolute z-30 hidden group-hover:flex -top-2 -right-3 translate-x-full w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700">Change Theme</span>

                        </li>
                    </Link>
                    <div className="divider h-4 w-[1px] bg-slate-200 dark:bg-gray-500"></div>

                    <li>
                        <MdLanguage />
                    </li>
                    <div className="divider h-4 w-[1px] bg-slate-200 dark:bg-gray-500"></div>

                    <li>

                        <HiBars3BottomRight />
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header