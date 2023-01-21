import { useState } from 'react';
import styles from '../styles/App.module.css'
import experience from '../styles/experience.module.css'
import Image from 'next/image'

export default function Experience({company, period, url, description}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
return (
    <div className={experience.experience} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={experience.period}>
            <span className='text3' >{period}</span>
        </div>

        <div>
            <a target="_blank" href={url} rel="noopener noreferrer" className={experience.linkA} >
                <h2 className={styles.link}>{company}</h2>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1382_1498)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46443 5.05021C5.46446 4.49794 5.91217 4.05023 6.46444 4.05021L14.9497 4.05021C15.502 4.05019 15.9497 4.49792 15.9497 5.05021V13.5355C15.9497 14.0878 15.502 14.5355 14.9497 14.5355C14.3974 14.5355 13.9497 14.0878 13.9497 13.5355L13.9497 7.46442L5.75733 15.6568C5.36679 16.0473 4.73363 16.0473 4.34311 15.6568C3.95258 15.2663 3.95258 14.6331 4.34311 14.2426L12.5355 6.0502L6.46442 6.0502C5.91218 6.0502 5.46444 5.60246 5.46443 5.05021Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_1382_1498">
                <rect width="20" height="20" fill="currentColor"/>
                </clipPath>
                </defs>
                </svg>
            </a>
            <p className='text2'>{description}</p>
        </div>
        
    </div>
)};