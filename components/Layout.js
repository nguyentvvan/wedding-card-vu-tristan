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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <main>{children}</main>
    </div>
  );
}