import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/header_in_layout.module.css'

const Header = () => (
    <header className={styles.header}>
      
      <Link href={'/register'} ><strong className={styles.button}>Join Now</strong></Link>
          <Link href={'/concerns'} ><strong className={styles.navigation_link}>Concerns</strong></Link>
          <Link href={'/donations/public_monetary'} ><strong className={styles.navigation_link}>Monetary Donations</strong></Link>
          <Link href={'/donations/public_in_kind'} ><strong className={styles.navigation_link}>In-Kind Donations</strong></Link>
          <Link href={'/gallery'} ><strong className={styles.navigation_link}>Gallery</strong></Link>
          <Link href={'/'} ><strong className={styles.navigation_link}>Home</strong></Link>
    </header>
)

export default Header