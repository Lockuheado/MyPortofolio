import React from 'react'
import styles from './Hero.module.css';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hello, i'm Alwan 
        </h1>
        <p className={styles.description}>
        Computer Science graduate from Institut Teknologi Garut with a strong passion for crafting digital experiences. Experienced in web, mobile, and game development with a focus on clean, interactive, and user-centered design.
        </p>
        <a href="mailto:alwanardana27@gmail.com" className={styles.contactBtn}>
            Contact Me
        </a>
    </div>
        <img 
            src="/assets/hero/heroImage.png" 
            alt="Hero Image of Me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
  </section>
  )
}
