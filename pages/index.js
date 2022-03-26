import Head from 'next/head'
import Image from 'next/image'
import FormComponent from '../components/form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.hero}></div>
        <h1>TROPA Volunteer Registration</h1>
       <FormComponent/>
    </div>
  )
}
