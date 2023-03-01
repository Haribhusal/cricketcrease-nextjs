import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/postsSlice";
import Skeleton from 'react-loading-skeleton'

const PostBordered = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const posts = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);

    function Box({ children }) {
        return (
            <div
                style={{
                    display: 'block',
                    background: "#eeeeee",

                    padding: '0rem',

                    marginTop: '15px',
                    width: '100%',
                    height: 120,
                }}
            >
                {children}
            </div>
        )
    }


    return (
        <div>
            {loading ? <Skeleton wrapper={Box} count={5} /> : posts.map((post) => (
                <Link href={`/post/${post.id}`} className="text-slate-600" key={post.id} >
                    <article className='flex justify-between border-b-[1px] group overflow-hidden mt-3 pb-3'>
                        <div className="info w-[80%] pr-5">

                            <h1 className='group-hover:text-red-700 transition-all my-2 text-2xl font-semibold leading-normal'>{post.title.rendered || <Skeleton />}</h1>
                            <p className="text-slate-500 text-sm">
                                {ReactHtmlParser(post.acf.post_excerpt) || <Skeleton count={10} />}
                            </p>
                            <div className="meta flex justify-between items-center mt-3">

                                <button className='bg-slate-100 px-2 py-1 text-[10px] rounded-sm group-hover:bg-slate-300 group-hover:text-slate-500 transition-all  text-slate-400 font-light'>Read More</button>
                                <div className="items flex gap-3">

                                    <span className=" tag border-[1px] border-gray-200 text-red-700 text-[10px] px-3 py-1 rounded-sm">

                                        {post.tag_info}
                                    </span>
                                    <span className=" tag border-[1px] border-gray-200 text-red-700 text-[10px] px-3 py-1 rounded-sm">

                                        {post.author_info.display_name}
                                    </span>


                                </div>
                            </div>
                        </div>
                        <Image src={post?.featured_image_urls?.medium[0]} alt={post.title.rendered} className=" overflow-hidden w-[20%] group-hover:scale-105 transition-all  object-cover rounded-sm bg-gray-200" height={300} width={300} />
                    </article>
                </Link>
            ))}

        </div>
    )
}

export default PostBordered