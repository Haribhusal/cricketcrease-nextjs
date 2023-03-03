
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/postsSlice";
import Skeleton from 'react-loading-skeleton'

const Sidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);


    function Box({ children }) {
        return (
            <div className='block opacity-50 mt-3 p-3 rounded-sm bg-gray-200 dark:bg-gray-600  w-full h-[0px]'>
                {children}
            </div>
        )
    }

    return (
        <aside className=' p-5 bg-gray-100 dark:bg-gray-700 sticky top-0 z-40 h-screen'>
            <h3 className="title font-bold text-base text-slate-500 dark:text-white">Recent Updates</h3>
            {loading ? <Skeleton wrapper={Box} count={20} /> : posts.slice(0, 10).map((post) => (
                <Link href={`/post/${post.id}`} className="text-slate-600 dark:text-white" key={post.id} >
                    <h1 className=' my-2 text-base font-light hover:text-red-700 transition-all leading-normal border-b-[1px] border-gray-200 dark:border-gray-600 py-1'>{post.title.rendered}</h1>
                </Link>
            ))}
        </aside>
    )
}

export default Sidebar