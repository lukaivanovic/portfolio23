import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Project.module.css'

export default function Project({title, description, url, image}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <Link href={url}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <div className={isHovering ? styles.projectHover : styles.project}>
                <Image
                    src={image}
                    width='816'
                    height='516'
                    alt="Picture of the author"
                    className={ isHovering ? styles.projectImageHover : styles.projectImage}
                    quality="100"
                />

                <div className={styles.projectDetails}>
                    <h2 className="text3">{title}</h2>
                    <p className="label2">{description}</p>
                </div>
            </div>
        </Link>
    )
};