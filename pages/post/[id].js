import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/slices/postsSlice";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Head from "next/head";

const postDetailPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  // console.log(slug);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts.data);
  const singlePost = posts.filter((item) => item.id === parseInt(id));
  console.log("singlePost", singlePost);
  const loading = useSelector((state) => state.posts.loading);

  return (
    <>
      <Head>
        <title>{singlePost[0]?.title.rendered}</title>
        <meta name="description" content={singlePost[0]?.excerpt.rendered} />
        <link rel="icon" href="/cricket-crease-logo.png" />
      </Head>

      <div className="py-10 single_post_detail_page">
        <h1 className="text-4xl text-slate-600 font-bold mb-5 leading-snug">
          {singlePost[0]?.title.rendered}
        </h1>
        <p className="text-slate-500 leading-relaxed">
          {ReactHtmlParser(singlePost[0]?.content?.rendered)}
        </p>
      </div>
    </>
  );
};

export default postDetailPage;
