import Link from 'next/link'
import styles from '../styles/thankyou.module.css'
import AlbumCard from './album_card'
const Thankyou = ({reason,toNavigate,buttonText}) => (
    <div className={styles.container}>
        <h1 className={styles.title}> Thank you for {reason} <span className={styles.emphasis}>Kakampink!</span></h1>
        <h3 className={styles.subtitle}>You will recieve an email shortly. </h3>
        <h6 className={styles.reminder}>If email is not found in inbox please check your spam folder </h6>
        <div className={styles.buttoncontainer}>
        <Link href={toNavigate}><h3 className={styles.button}>{buttonText}</h3></Link>
        </div>
        <h1>Checkout our recent activities</h1>
        <div className={styles.albumContainer}>
          
            <AlbumCard title={'Brgy Silangan, Quezon city'} date={'April 10, 2022'}  images={['https://i.ibb.co/5RXt2Sp/DSCF9352.jpg','https://i.ibb.co/6Zjhpww/DSCF9239.jpg', 'https://i.ibb.co/BKtfdCD/DSCF9271.jpg','https://i.ibb.co/3mhV0dL/DSCF9311.jpg']} link={'/gallery/Brgy%20Silangan%20Quezon%20City'}/>
            <AlbumCard title={'Mandaluyong city'} date={'April 12, 2022'}  images={['https://i.ibb.co/n3b2GLG/Whats-App-Image-2022-04-16-at-10-03-31-PM-1.jpg','https://i.ibb.co/M9ZHrdX/Whats-App-Image-2022-04-16-at-10-03-29-PM-1.jpg', 'https://i.ibb.co/DCb1Stc/Whats-App-Image-2022-04-16-at-10-03-26-PM-1.jpg','https://i.ibb.co/bz9sKmx/Whats-App-Image-2022-04-16-at-10-03-26-PM.jpg']} link={'/gallery/Mandaluyong'}/>
            
        </div>
    </div>
)
export default Thankyou