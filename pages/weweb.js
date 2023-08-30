import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Content.module.css';
import Weweb from '../projects/weweb.mdx';

export default function weweb() {
  return (
    <>
      <Head>
        <title>Luka Ivanovic - Product Designer</title>
        <meta
          name="description"
          content="Looking to work on great products with great teams. Previous clients include corporations, agencies and startups. Open to EU and US opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@lukaivnvc"></meta>
        <meta name="twitter:title" content="ivnvncluka - product design"></meta>
        <meta
          name="twitter:description"
          content="Looking to work on great products with great teams."
        ></meta>
        <meta
          name="twitter:image"
          content="https://uploads-ssl.webflow.com/61e01b31ffff93bff1f722af/6396fe76931bdf13023e6d96_og_image.png"
        ></meta>
      </Head>

      <main className={`${styles.main} contentText`}>
        <Weweb />
      </main>
    </>
  );
}
