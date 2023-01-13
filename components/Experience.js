import { useState } from 'react';
import styles from '../styles/App.module.css'
import experience from '../styles/experience.module.css'

export default function Experience({company, period, url, description}) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
return (
    <div className={experience.experience} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={experience.period}>
            <span className='text2' >{period}</span>
        </div>

        <div>
            <a target="_blank" href={url} className='label2' >{company}</a>
            <p>{description}</p>
        </div>
        
    </div>
)};