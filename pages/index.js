import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola mi nombre es Andres D'Amelio, soy desarrollador Frontend y comparto contenido en las redes.</p>
        <p>
          ir a mi{' '}
          <Link href='/blog'>blog</Link>
        </p>
      </section>
    </Layout>
  );
};

export default Home;
