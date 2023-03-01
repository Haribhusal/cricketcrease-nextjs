import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/postsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);
    return (
        <div>
            {loading ? <p>Loading</p> : posts.map((post) => (
                <Link href={`/post/${post.id}`} className="text-slate-600" key={post.id} >
                    <article className='flex justify-between border-[1px] border-gray-200 mt-5 rounded-md group overflow-hidden'>
                        <div className="info p-5 w-[80%]">
                            <span className="tag border-[1px] border-gray-200 text-red-700 text-[10px] px-3 py-1 rounded-sm">
                                {post.tag_info}
                            </span>
                            <h1 className='group-hover:text-red-700 transition-all my-2 text-2xl font-semibold leading-normal'>{post.title.rendered}</h1>
                            <p className="text-slate-500 text-sm">
                                {ReactHtmlParser(post.acf.post_excerpt)}
                            </p>
                            <button className='border-[1px] border-gray-200 px-3 py-1 mt-3 text-sm rounded-sm group-hover:bg-red-700 group-hover:text-white transition-all  text-slate-400 font-light'>Read More</button>

                        </div>
                        <Image src={post?.featured_image_urls?.medium[0]} alt={post.title.rendered} className=" overflow-hidden w-[25%] group-hover:scale-105 transition-all  object-cover rounded-sm bg-gray-200" height={300} width={300} />
                    </article>
                </Link>
            ))}

        </div>
    )
}

export default Posts