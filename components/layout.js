import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Wedding card Quyen Tran - Yuki"
        />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <div>Header</div>
      </header>
      <main>{children}</main>
    </div>
  );
}