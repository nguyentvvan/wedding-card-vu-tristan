import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import clsx from "clsx";

const siteTitle = 'Vu - Tristan';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/heart.svg" />
        <meta
          name="description"
          content="Wedding card Vu - Tristan"
        />
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Indie+Flower&family=Inter:wght@100;400&family=Noto+Sans+JP:wght@100&family=Permanent+Marker&family=Questrial&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Indie+Flower&family=Inter:wght@100;400&family=Noto+Sans+JP:wght@100&family=Questrial&display=swap" rel="stylesheet"></link> */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossoorigin="anonymous" referrerpolicy="no-referrer" /> */}
      </Head>
      <header className={styles.header}>
				<ul className={styles.nav}>
					<li className={router.pathname === "/" ? styles.activeNavItem : styles.navItem}>
						<Link href="/">Invitation</Link>
					</li>
          <li className={router.pathname === "/events" ? styles.activeNavItem : styles.navItem}>
						<Link href="/events">Events</Link>
					</li>
					<li className={router.pathname === "/loves" ? styles.activeNavItem : styles.navItem}>
						<Link href="/loves">Loves</Link>
					</li>
				</ul>
			</header>
      <main>
        <div className="py-5">
          {children}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}