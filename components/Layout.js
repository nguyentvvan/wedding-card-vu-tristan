import Head from 'next/head';
import Link from 'next/link';

const siteTitle = 'Vu - Tristan';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta
          name="description"
          content="Wedding card Vu - Tristan"
        />
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Inter:wght@100;400&family=Noto+Sans+JP:wght@100&family=Questrial&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossoorigin="anonymous" referrerpolicy="no-referrer" /> */}
      </Head>
      <header className={styles.header}>
				<ul>
					<li>
						<Link href="/">Invitation</Link>
					</li>
					<li>
						<Link href="/love-quotes">Love quotes</Link>
					</li>
				</ul>
			</header>
      <main>{children}</main>
      <footer className={styles.footer}></footer>
    </>
  );
}