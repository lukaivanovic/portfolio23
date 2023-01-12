import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/App.module.css'
import testPic from '../public/test.png'

export default function Project({title, description, url, image, time}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
return (
    <Link href={url}>
        <div
        className={styles.project}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >

            <Image
                src={image}
                alt="Picture of the author"
                className={ isHovering ? styles.projectImageHover : styles.projectImage}
                placeholder="blur"
                quality="100"
            />

            <p className={ styles.label2 }>{title}</p>
            <p className={styles.text2} >{description}</p>
        </div>
    </Link>
)};