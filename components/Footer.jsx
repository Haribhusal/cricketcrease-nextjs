import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-slate-800 text-white pt-10 pb-5'>
            <div className="container mx-auto flex gap-5 items-start justify-between">
                <div className="item">
                    <h3 className="title font-bold mb-5">Categories</h3>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li>
                            <Link href="/">Nepal</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Under 19</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Men</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Women</Link>
                        </li>
                        <li>
                            <Link href="/">International</Link>
                        </li>

                    </ul>
                </div>
                <div className="item">
                    <h3 className="title font-bold mb-5">Categories</h3>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li>
                            <Link href="/">Nepal</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Under 19</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Men</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Women</Link>
                        </li>
                        <li>
                            <Link href="/">International</Link>
                        </li>

                    </ul>
                </div>
                <div className="item">
                    <h3 className="title font-bold mb-5">Categories</h3>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li>
                            <Link href="/">Nepal</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Under 19</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Men</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Women</Link>
                        </li>
                        <li>
                            <Link href="/">International</Link>
                        </li>

                    </ul>
                </div>
                <div className="item">
                    <h3 className="title font-bold mb-5">Categories</h3>
                    <ul className='text-sm flex flex-col gap-2'>
                        <li>
                            <Link href="/">Nepal</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Under 19</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Men</Link>
                        </li>
                        <li>
                            <Link href="/">Nepal Women</Link>
                        </li>
                        <li>
                            <Link href="/">International</Link>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="bottom border-t-[1px] text-sm border-slate-700 pt-5 mt-5">
                <div className="container mx-auto flex justify-between">
                    <div className="credit">

                        &copy; CricketCrease.com - 2023, All Rights Reserved
                    </div>
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

                </div>
            </div>
        </footer>
    )
}

export default Footer