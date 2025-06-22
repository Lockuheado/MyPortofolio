import React from 'react'
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:alwanardana27@gmail.com">alwanardana27@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/alwan-ardana-526060257/">LinkedIn.com/AlwanArdana</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/githubIcon.png" alt="GitHUb Icon" />
                <a href="https://github.com/Lockuheado">GitHub.com/Lockuheado</a>
            </li>
        </ul>
    </footer>
  )
}
