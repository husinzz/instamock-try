import Head from 'next/head';

interface SEOProps {
  title : string;
}

export default function SEO(props : SEOProps) {



  return(
    <Head>
      <title>{props.title} * Instamock-try</title>

    </Head>
  )
}