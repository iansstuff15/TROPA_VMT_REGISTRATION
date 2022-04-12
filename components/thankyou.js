import Link from 'next/link'
import styles from '../styles/thankyou.module.css'
const Thankyou = ({reason,toNavigate,buttonText}) => (
    <div className={styles.container}>
        <h1 className={styles.title}> Thank you for {reason} <span className={styles.emphasis}>Kakampink!</span></h1>
        <h3 className={styles.subtitle}>You will recieve an email shortly. </h3>
        <h6 className={styles.reminder}>If email is not found in inbox please check your spam folder </h6>
        <div className={styles.buttoncontainer}>
        <Link href={toNavigate}><h3 className={styles.button}>{buttonText}</h3></Link>
        </div>
      
    </div>
)
export default Thankyou