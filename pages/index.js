import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/App.module.css'
import wewebPic from '../public/weweb.png'
import wewebPic2 from '../public/weweb2.png'
import Project from '../components/Project'
import BitcoinPic from '../public/bitcoin-store/01-00.png'
import profilePic from '../public/profilePic.png'
import Experience from '../components/Experience'
import BitcoinPic2 from '../public/digital-assets.png'

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
            <Image src={profilePic} className={styles.profileImage}/>
            <p>Luka Ivanović</p>
            <h2>Product designer working on startups and early-stage companies</h2>
            <p>22 years old, currently living in Split, Croatia. Open to EU and US opportunities. Remote and relocation friendly.</p>
          </div>

          <div className='divider'></div>
          <div className={styles.section}>
            <div className={styles.projects}>
              <Project
                title= "WeWeb"
                description= "No-code interface builder"
                url = "weweb"
                image = {wewebPic2}
                time = "Apr 2022 - present"
              />

              <Project
                title= "Digital Assets"
                description= "Trade and store crypto"
                url = "bitcoin-store"
                image = {BitcoinPic2}
                time = "Nov 2021 - Jul 2022"
              />
            </div>
          </div>
          
          <div className='divider'></div>
          <div className={styles.section}>
            <Experience
              company = "STAG"
              url = "ivanovicluka.co"
              period = "2020 - 2023"
              description= "Independent product designer."
            />

            <Experience
              company = "WeWeb"
              url = "https://weweb.io"
              period = "2022 - 2023"
              description= "Contract work for a startup in no-code application building space."
            />

            <Experience
              company = "NDA"
              period = "2021 - 2022"
              description= "Contract work on m-banking app for a large bank brand."
            />

            <Experience
              company = "ADP"
              period = "2021 - 2022"
              url = "https://arasdigital.co"
              description= "Worked on different mobile apps for clients like Teltech."
            />

            <Experience
              company = "Profico"
              period = "2020 - 2021"
              url = "https://profi.co"
              description= "Working on design of large scale data-based web applications."
            />
          </div>

          <div className='divider'></div>
          <div className={styles.section}>
            <a>hi@ivanovicluka.co</a>
            <a href='https://twitter.com/lukaivnvc'>twitter</a>
            <a href='https://dribbble.com/lukaivanovic'>dribbble</a>
          </div>
      </main>
    </>
  )
}
