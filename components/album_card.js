import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/album_card.module.css'

const AlbumCard = ({title,date,images, link})=>{
  return( 
      <Link href={link}>
             <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.date}>{date}</h2>
        <div className={styles.image_grid}>
            {images.map((image)=>(  <Image src={image} height={200} width={200} objectFit='cover' className={styles.image} key={image}/>))}
          
        </div>
    </div>
    </Link>

    )
}

export default AlbumCard