import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import testPic from '../public/test.png'

export default function Project({title, description, url, image}) {
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

            <h2 className={ isHovering ? styles.projectTitle : styles.projectTitleHover }>{title}</h2>
            <h2 className={ isHovering ? styles.projectTitle : styles.projectTitleHover }>{description}</h2>
            <Image
                src={image}
                alt="Picture of the author"
                className={styles.image}
            />
        </div>
    </Link>
)};