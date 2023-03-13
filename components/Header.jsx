import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
import { BsSearch, BsFillLightningChargeFill } from 'react-icons/bs'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { CiLight } from 'react-icons/ci'
import useDarkMode from 'use-dark-mode';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
const Header = () => {

    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const darkMode = useDarkMode(false);



    return (
        <header className='shadow  relative z-50  border-b-[1px] border-transparent dark:border-gray-700 '>
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
                    <input type="text" placeholder="Search Matches, Players" className="text-sm rounded-full w-[250px] border-[1px] ring-0 outline-none px-5 py-2 bg-transparent" />
                    <button className="p-2 absolute right-2 top-0 h-[100%]">
                        <BsSearch />
                    </button>
                </form>
                <nav>
                    <ul className='text-sm capitalize text-slate-600 dark:text-white flex gap-5'>
                        <li className='m-0'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='m-0'>
                            <Link href={'/'}>Matches</Link>
                        </li>
                        <li className='m-0'>
                            <Link href={'/'}>News</Link>
                        </li>
                        <li className='m-0'>
                            <Link href={'/'}>Players</Link>
                        </li>
                        <li className='m-0'>
                            <Link href={'/'}>Teams</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="text-sm capitalize items-center text-slate-600 dark:text-white flex gap-5">
                    <Link href={'/'}>

                        <li className='cursor-pointer m-0'>
                            <BsFacebook />

                        </li>
                    </Link>
                    <Link href={'/'}>
                        <li className=' cursor-pointer m-0'>
                            <BsTwitter />

                        </li>
                    </Link>
                    <div className="divider h-4 w-[1px] bg-slate-200 dark:bg-gray-500"></div>

                    <li className='flex items-center'>
                        <Switch
                            checked={darkMode.value}
                            onChange={() => darkMode.toggle()}
                        />
                    </li>
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