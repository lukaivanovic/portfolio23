import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Content.module.css'
import BitcoinStore from '../projects/bitcoin-store.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function bitcoinstore() {
  return (
    <>

      <Head>
        <title>ivnvncluka - product design</title>
        <meta name="description" content="Looking to work on great products with great teams. Previous clients include corporations, agencies and startups. Open to EU and US opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@lukaivnvc"></meta>
        <meta name="twitter:title" content="ivnvncluka - product design"></meta>
        <meta name="twitter:description" content="Looking to work on great products with great teams."></meta>
        <meta name="twitter:image" content="https://uploads-ssl.webflow.com/61e01b31ffff93bff1f722af/6396fe76931bdf13023e6d96_og_image.png"></meta>
      </Head>
      
      <main className={styles.main2}>

          <div className={styles.main}>
            <BitcoinStore/>
          </div>
          
          <div className={styles.shotGrid}>
            <Image
              src="/bitcoin-store/01-00.webp"
              alt=" "
              width="2048"
              height="1536"
              className={styles.shotImage}
            />
            
            <Image
            src="/bitcoin-store/01-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/01-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
          </div>

          <div className={styles.shotGrid}>
            <Image
            src="/bitcoin-store/02-00.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/02-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
            <Image
            src="/bitcoin-store/02-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

          </div>


          <div className={styles.shotGrid}>
            <Image
            src="/bitcoin-store/03-00.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
            <Image
            src="/bitcoin-store/03-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
            <Image
            src="/bitcoin-store/03-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

          </div>  
          <div className={styles.shotGrid}>

            <Image
            src="/bitcoin-store/04-00.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/04-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/04-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

          </div>  
          <div className={styles.shotGrid}>

            <Image
            src="/bitcoin-store/05-00.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/05-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/05-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            <Image
            src="/bitcoin-store/05-03.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            </div>  
            <div className={styles.shotGrid}>

            <Image
            src="/bitcoin-store/06-00.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
            <Image
            src="/bitcoin-store/06-01.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />
            <Image
            src="/bitcoin-store/06-02.webp"
            alt=" "
            width="2048"
            height="1536"
            className={styles.shotImage}
            />

            </div>  
        
      </main>
    </>
  )
}
