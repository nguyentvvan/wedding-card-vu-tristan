import Head from 'next/head';

const siteTitle = 'Quyen Tran - Yuki';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta
          name="description"
          content="Wedding card Quyen Tran - Yuki"
        />
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Inter:wght@100;400&family=Noto+Sans+JP:wght@100&family=Questrial&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossoorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <main>{children}</main>
    </>
  );
}