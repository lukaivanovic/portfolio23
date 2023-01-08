import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import testPic from '../public/test.png'
import wewebPic from '../public/weweb.png'
import Project from '../components/Project'
import BitcoinPic from '../public/bitcoin-store/01-00.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <main className={styles.main}>
          <div className={styles.section}>
            <h1>Product design for startups and early-stage companies</h1>
            <p>22-year old currently living in Split, Croatia. Want to work on well-built and useful products with great teams. Clients include Netguru, WeWeb, a big traditional bank, Teltech, Bitcoin Store and more.</p>
            <p>Open to remote and relocation EU and US opportunities. For more info and contact: <a>hi@ivanovicluka.co</a> / <a href='https://twitter.com/lukaivnvc'>twitter</a> / <a href='https://dribbble.com/lukaivanovic'>dribbble</a>.</p>
          </div>

          <div className={styles.projects}>
            <Project
              title= "WeWeb"
              description= "Build user interfaces on top of databases"
              url = "weweb"
              image = {wewebPic}
              time = "Apr 2022 - present"
            />

            <Project
              title= "Bitcoin Store"
              description= "Simply buy, sell and securely store cryptocurrencies"
              url = "bitcoin-store"
              image = {BitcoinPic}
              time = "Nov 2021 - Jul 2022"
            />
          </div>
      </main>
    </>
  )
}
