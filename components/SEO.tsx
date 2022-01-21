import Head from 'next/head';

export default function SEO(props) {

  return(
    <Head>
      <title>{props.title}</title>
      {props.children}
    </Head>
  )
}