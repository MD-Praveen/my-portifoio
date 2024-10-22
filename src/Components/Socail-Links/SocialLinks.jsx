import React from 'react'
import styles from './SocialLinks.module.css' 
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <nav className={styles.socailLinks}>
        <Link><i class="fa-brands fa-github" /></Link>
        <Link><i class="fa-brands fa-linkedin" /></Link>
        <Link><i class="fa-brands fa-instagram" /></Link>
    </nav>
  )
}

export default SocialLinks