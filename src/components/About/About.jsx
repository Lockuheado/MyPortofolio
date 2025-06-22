import React from 'react'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src="/assets/about/aboutImage.png" 
                alt="Im Sitting here nicely" 
                className={styles.aboutImage} 
            />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src="/assets/about/cursorIcon.png" alt="Cursor Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Front-End Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="/assets/about/gamepadIcon.png" alt="GamePad Icon" />
                <div className={styles.aboutItemText}>
                    <h3>Game Developer</h3>
                    <p>I'm a game developer with experience in building interactive and engaging gameplay experiences</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src="/assets/about/uiIcon.png" alt="UI Icon" />
                <div className={styles.abutItemText}>
                    <h3>Graphic Designer</h3>
                    <p>I'm a graphic designer with experience in creating visually compelling and effective design solutions</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
