import Head from 'next/head';

export default function SEO(props) {

  return(
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/instamock-logo.svg" />
      {props.children}
    </Head>
  )
}