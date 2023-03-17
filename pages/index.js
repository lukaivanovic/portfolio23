import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/App.module.css'
import Project from '../components/ProjectNew'
import profileImage from '../public/profilePic.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <Head>
        <title>Luka Ivanović</title>
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

        <div className={styles.profileParent}>
          <Image
            src = {profileImage}
            className = {styles.profileImage}
          />
        </div>
      
        <div className={styles.rm}>
          <p>Luka Ivanović</p>
          <h1>Product design for startups and early-stage companies</h1>
          <p>Independent functionalist passionate about building stuff. Trying to code here and there. Based in the EU.</p>
          <p>Previous work includes an m-banking app for a large European bank, acquired loan fintech, a US spam call blocking mobile app and the projects below.</p>
        </div>

        <div className={styles.projects}>
        
          <Project title= "WeWeb"  description= "No-code supercharged app builder" url = "weweb" image = '/weweb2.png' previewImage = '/weweb-preview.webp' link="https://www.weweb.io" linkName="weweb.io"/>
          <Project title= "Digital Assets" description= "Buy, sell and store cryptocurrencies" url = "bitcoin-store" image = '/digital-assets.png' previewImage = '/bitcoin-preview.webp' link="https://www.bitcoin-store.net" linkName="bitcoin-store.net"/>
          <div className={styles.socialGrid}>
          <a className={styles.socialCard} target="_blank" href='https://twitter.com/lukaivnvc' rel="noopener noreferrer">
            <Image
                src="/twitter.svg"
                width='14'
                height='14'
                alt="Project preview"
                className={styles.projectImage}
                quality="100"
                priority='true'
            />
            <h2 className="text2">Insights to problem solving<br></br><span className="label1">Twitter</span></h2>
          </a>
        
        
          <a className={styles.socialCard} target="_blank" href='https://twitter.com/lukaivnvc' rel="noopener noreferrer">
            <Image
              src="/dribbble.svg"
              width='14'
              height='14'
              alt="Project preview"
              className={styles.projectImage}
              quality="100"
              priority='true'
            />
            <h2 className="text2">Interface shots<br></br><span className="label1">Dribbble</span></h2>
          </a>
        </div>
        </div>
      
        <div className='divider'></div>

        <div className={styles.links}>
          <p>
            <a> <span className={styles.link}>hi@ivanovicluka.co </span></a>
            ·
            <a target="_blank" href='https://twitter.com/lukaivnvc' rel="noopener noreferrer"> <span className={styles.link}>Twitter </span></a>
            · 
            <a target="_blank" href='https://dribbble.com/lukaivanovic' rel="noopener noreferrer"> <span className={styles.link}>Dribbble </span></a>
            · 
            <a target="_blank" href='https://www.linkedin.com/in/luka-ivanović-8141a516b/' rel="noopener noreferrer"> <span className={styles.link}>LinkedIn </span></a>
            · 
            <a target="_blank" href='https://read.cv/ivnvcluka' rel="noopener noreferrer"> <span className={styles.link}>Read.cv </span></a>
          </p>
        </div>
      </main>
    </>
  )
}
