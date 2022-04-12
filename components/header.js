import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/header.module.css'

const Header = () => (
    <header className={styles.header}>
        <Link href={'/'}>
        <Image src={logo}alt="logo"
      width={100}
      height={100}/>
        </Link>
     
     
          <Link href={'/concerns'} ><strong className={styles.navigation_link}>Concerns</strong></Link>
          <Link href={'/donations/public_monetary'} ><strong className={styles.navigation_link}>Monetary Donations</strong></Link>
          <Link href={'/gallery'} ><strong className={styles.navigation_link}>Gallery</strong></Link>
    
    </header>
)

export default Header