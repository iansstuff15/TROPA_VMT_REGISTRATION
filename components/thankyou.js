import Link from 'next/link'
import styles from '../styles/thankyou.module.css'
const Thankyou = () => (
    <div className={styles.container}>
        <h1 className={styles.title}> Thank you for signing up <span className={styles.emphasis}>Kakampink!</span></h1>
        <h3 className={styles.subtitle}>You will recieve a confirmation email and text shortly </h3>
        <h6 className={styles.reminder}>If email is not found in inbox please check your spam folder </h6>
        <div className={styles.buttoncontainer}>
        <Link href={'/'}><h3 className={styles.button}>Go back to registration page</h3></Link>
        </div>
      
    </div>
)
export default Thankyou