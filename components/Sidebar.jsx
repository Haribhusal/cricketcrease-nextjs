
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/postsSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);

    return (
        <aside className=' p-5 bg-gray-100 sticky top-16 z-40'>
            <h3 className="title font-bold text-base text-slate-500">Popular News</h3>
            {loading ? <p>Loading</p> : posts.slice(0, 10).map((post) => (
                <Link href={`/post/${post.slug}`} className="text-slate-600" key={post.id} >
                    <h1 className=' my-2 text-base font-light hover:text-red-700 transition-all leading-normal border-b-[1px] border-gray-200 py-1'>{post.title.rendered}</h1>
                </Link>
            ))}
        </aside>
    )
}

export default Sidebar