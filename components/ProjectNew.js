import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Project.module.css'

export default function Project({title, description, link, linkName ,url, image, previewImage}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
            <div className={isHovering ? styles.projectHover : styles.project}>
                <Link href={url}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                    <div className={styles.projectContent}>
                        

                        <Image
                            src={previewImage}
                            width='1860'
                            height='984'
                            alt="Project preview"
                            className={styles.projectPreview}
                            quality="100"
                            priority='true'
                        />

                        <div className={styles.projectDetails}>
                            <Image
                                src={image}
                                width='56'
                                height='56'
                                alt="Project preview"
                                className={styles.projectImage}
                                quality="100"
                                priority='true'
                            />
                            <div className={styles.projectInformation}>
                                <h2 className="text2">{title}</h2>
                                <span className="label1">{description}</span>
                            </div>
                        </div>  
                    </div>
                </Link>

                <div className={styles.projectLink}>
                    <a 
                    target="_blank"
                    href={link}
                    onMouseEnter={onMouseLeave}
                    rel="noopener noreferrer"
                    >
                        <span className={styles.link}>{linkName}</span>
                    </a>
                </div>
            </div>
    )
};