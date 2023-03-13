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
import Image from "next/image";

const PostDetailPage = () => {
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
        <meta
          property="og:image"
          content={singlePost[0]?.featured_image_urls?.medium[0]}
        />

        <meta property="og:title" content={singlePost[0]?.title.rendered} />

        <meta
          property="og:description"
          content={ReactHtmlParser(singlePost[0].acf.post_excerpt)}
        />

        <meta property="og:image:width" content="500" />

        <meta property="og:image:height" content="400" />
      </Head>

      <div className="py-10 single_post_detail_page">
        <h1 className="text-4xl font-bold mb-5 leading-snug">
          {singlePost[0]?.title.rendered}
        </h1>
        <p className="leading-relaxed">
          {ReactHtmlParser(singlePost[0]?.content?.rendered)}
        </p>
      </div>
    </>
  );
};

export default PostDetailPage;
