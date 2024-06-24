import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    console.log('**** GTM Event Clicked ****');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'clickEvent',
      'gtm.start': new Date().getTime(),
      'custom': 'some data'
    });
  }
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>GTM Events Try</h1>
        <button onClick={handleClick}>Test GTM</button>
        <br/>
        <Link href="/about">About Page Next Link</Link>
        <br/>
        <a href="/about">About Page Anchor Tag</a>
      </main>
    </>
  );
}
