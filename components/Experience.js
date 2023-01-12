import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '../styles/App.module.css'
import testPic from '../public/test.png'

export default function Experience({company, period, url, description}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
return (
    <div className={styles.experience} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p className={styles.text3}>{period}</p>
        <a target="_blank" href={url}>
            {company}
        </a>
        <p className={styles.text2}>{description}</p>
    </div>
)};