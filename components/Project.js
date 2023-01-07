import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import testPic from '../public/test.png'

export default function Project({title, description, url, image, time}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
return (
    <Link href={url}>
        <div
        className={styles.section}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >

            
            <Image
                src={image}
                alt="Picture of the author"
                className={styles.projectImage}
            />
            <h2 className={ styles.label2 }>{title}</h2>
            <h2 className={ isHovering ? styles.projectTitleHover : styles.projectTitle }>{description}</h2>
            <p className={styles.label2}>{time}</p>
        </div>
    </Link>
)};