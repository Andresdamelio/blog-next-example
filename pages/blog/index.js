import Head from 'next/head'
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Bienvenido a mi blog</h1>

      <h4>
        <Link href='/blog/first-post'>Mi primer post</Link>
      </h4>

      <h4>
        <Link href='/'>Volver al inicio</Link>
      </h4>
    </>
  );
};

export default Blog;
