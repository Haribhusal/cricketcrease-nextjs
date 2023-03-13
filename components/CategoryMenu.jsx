import Link from 'next/link'
import React from 'react'

const CategoryMenu = () => {
    return (
        <nav className='border-b-[1px] py-2 sticky top-0 z-40'>
            <ul className='text-[10px] capitalize text-slate-600 dark:text-white flex gap-5'>
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

            </ul>
        </nav>
    )
}

export default CategoryMenu