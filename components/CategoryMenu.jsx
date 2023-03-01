import Link from 'next/link'
import React from 'react'

const CategoryMenu = () => {
    return (
        <nav className='border-b-[1px] border-slate-200 py-2 sticky top-0 z-40 bg-white '>
            <ul className='text-sm capitalize text-slate-600 flex gap-5'>
                <li>
                    <Link href={'/'}>Live Scores</Link>
                </li>
                <li>
                    <Link href={'/'}>Fixtures</Link>
                </li>
                <li>
                    <Link href={'/'}>Results</Link>
                </li>
                <li>
                    <Link href={'/'}>Pratish GCICC</Link>
                </li>
                <li>
                    <Link href={'/'}>Pratish GCICC</Link>
                </li>
                <li>
                    <Link href={'/'}>Men’s CWCL</Link>
                </li>
                <li>
                    <Link href={'/'}>Under-19s</Link>
                </li>
                <li>
                    <Link href={'/'}>Nepal Women</Link>
                </li>
                <li>
                    <Link href={'/'}>ICC Rankings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default CategoryMenu