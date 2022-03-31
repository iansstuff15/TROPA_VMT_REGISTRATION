import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'
import Background from '../public/background_image.jpg'
export default function Home() {
  return (
    <div className={styles.home}>    <div className={styles.container}>
         <Image src={logo}alt="logo"
      width={100}
      height={100}/>
      <div className={styles.container_vertical_center}>
      <h3 className={styles.title} >Take part in the campaign</h3>
      <h1 className={styles.title_emphasis}>Be a TROPA <span className={styles.volunteer_text}>Volunteer</span></h1>
     <Link href='/register' ><span className={styles.button}> Join Now</span></Link>
      </div>
   
    </div>
   
   
    </div>

  )
}
