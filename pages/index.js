import Head from "next/head";
import PostBordered from "../components/PostBordered";
// import Posts from "../components/Posts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CricketCrease.com | Nepali Cricket Blog</title>
        <meta name="description" content="Nepali Cricket Blog" />
        <link rel="icon" href="/cricket-crease-logo.png" />
      </Head>
      <main>
        <PostBordered />
      </main>
    </div>
  );
}
