import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'
const Header = () => {
    return (
        <header className='shadow sticky top-0 z-50 bg-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center ">
                        <Image src="/cricket-crease-logo.png" className='h-16 w-16' height={100} width={100} priority={true} alt="cricket-crease-logo" />
                        <div className="info">
                            <h1 className='leading-tight m-0 font-bold uppercase text-xl text-red-700'>Cricket Crease</h1>
                            <p className='leading-tight text-sm text-slate-400'>Nepali Cricket Blog</p>
                        </div>
                    </div>
                </Link>
                <nav>
                    <ul className='text-sm capitalize text-slate-600 flex gap-5'>
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
                        <li>
                            <Link href={'/'}>Cricket Nepal</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="text-sm capitalize items-center text-slate-600 flex gap-5">

                    <li>
                        <BsFacebook />
                    </li>
                    <li>
                        <BsTwitter />
                    </li>

                    <div className="divider h-4 w-[1px] bg-slate-200"></div>

                    <li>
                        <MdDarkMode />
                    </li>
                    <div className="divider h-4 w-[1px] bg-slate-200"></div>

                    <li>
                        <MdLanguage />
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Header