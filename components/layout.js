import Head from 'next/head';
import styles from './Layout.module.scss';

const siteTitle = 'Quyen Tran - Yuki';

export default function Layout({ children }) {
  return (
    <div className={styles.contentWrapper}>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta
          name="description"
          content="Wedding card Quyen Tran - Yuki"
        />
        <title>{siteTitle}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
}