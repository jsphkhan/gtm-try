import Head from "next/head";

export default function Home() {
  const handleClick = () => {
    console.log('**** GTM Event Clicked ****');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'clickEvent',
      'gtm.start': new Date().getTime()
    });
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>GTM Events Try</h1>
        <button onClick={handleClick}>Test GTM</button>
      </main>
    </>
  );
}
