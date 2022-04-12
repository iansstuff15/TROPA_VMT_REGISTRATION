import Head from 'next/head'

import Link from 'next/link'
import featured from '../public/featured_image.jpg'
import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Header from '../components/header'
export default function Home() {
  return (
    <div className={styles.home}>    <div className={styles.container}>
      <Header/>
      <div>
      <div className={styles.container_vertical_center}>
      <h3 className={styles.title} >Take part in the campaign</h3>
      <h1 className={styles.title_emphasis}>Be a TROPA <span className={styles.volunteer_text}>Volunteer</span></h1>
     <Link href='/register' ><span className={styles.button}> Join Now</span></Link>
      </div>

      </div>
    <div className={styles.image_container}>

    </div>
    
    </div>
   
   
    </div>

  )
}
