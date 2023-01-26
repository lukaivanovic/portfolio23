import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/App.module.css'
import Project from '../components/Project'
import profileImage from '../public/profilePic.png'
import Experience from '../components/Experience'
import experience from '../styles/experience.module.css'

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

          <div className={styles.section}>
            <div className={styles.profileParent}>
              <Image
                src = {profileImage}
                className = {styles.profileImage}
              />
            </div>
            <p className='text2'>Luka Ivanović</p>
            <h1 className='h1'>Designing products for startups and companies</h1>
            <p className='text2'>Functionalist designer passionate about building stuff. Trying to code here and there. 22 years of age currently residing in Croatia.</p>
            <div className={styles.projects}>
              <Project title= "WeWeb"  description= "No-code supercharged app builder" url = "weweb" image = '/weweb2.png'/>
              <Project title= "Digital Assets" description= "Buy, sell and store cryptocurrencies" url = "bitcoin-store" image = '/digital-assets.png'/>
            </div>
          </div>

          

          <div className={styles.section}>
            <p className='label2'>Work and experience</p>
            <div className='divider'></div>

            <div className={experience.experience}>
              <div className={experience.period}>
                  <span className='text3' >2021 - Now</span>
              </div>

              <div>
                  <h2 className='label2'>Independent</h2>
                  <p className='text2'>Had the chance to work on a growing no-code application builder, largest cryptocurrency wallet in SE Europe and a mobile app for a large financial institution.</p>
              </div>
        
            </div> 

            <Experience
              company = "Product design at ADP"
              period = "2021 - 2022"
              url = "https://arasdigital.co"
              description= "Worked on a web application for online fitness sessions, mobile app allowing nutritionists to easily share recipes with clients and an US spam-call blocker mobile app."
            />

            <Experience
              company = "Product design at Profico"
              period = "2020 - 2021"
              url = "https://profi.co"
              description= "Worked on a data-heavy web application for an US state department, website and app for a smart parking startup and all things product for a Nigerian fintech."
            />
          </div>

          <div className={styles.section}>

            <p className='label2'>Contact</p>
            <div className='divider'></div>

            <div className={styles.links}>
              <p>
                <a target="_blank" href='https://twitter.com/lukaivnvc' rel="noopener noreferrer"> <span className={styles.link}>Twitter </span></a>
                · 
                <a target="_blank" href='https://dribbble.com/lukaivanovic' rel="noopener noreferrer"> <span className={styles.link}>Dribbble </span></a>
                · 
                <a target="_blank" href='https://www.linkedin.com/in/luka-ivanović-8141a516b/' rel="noopener noreferrer"> <span className={styles.link}>LinkedIn </span></a>
                · 
                <a target="_blank" href='https://read.cv/ivnvcluka' rel="noopener noreferrer"> <span className={styles.link}>Read.cv </span></a>
                · 
                <a target="_blank" href='https://layers.to/luka' rel="noopener noreferrer"> <span className={styles.link}>Layers.to </span></a>
              </p>
            </div>

            <a> <span className={styles.link}>hi@ivanovicluka.co</span></a>
          </div>
      </main>
    </>
  )
}
