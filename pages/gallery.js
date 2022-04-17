import React from "react";
import AlbumCard from "../components/album_card";
import InputComponent from "../components/input"
import Layout from "../components/layout";
import styles from '../styles/gallery.module.css'
class Gallery extends React.Component{
    constructor(){
        super()
        this.state = {
            concern: "",
            phone:"",
            email:"",
        }
    }

    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
     
          };


   render(){ return(
 
        <Layout>
            <h1 className={styles.title}>Photo</h1>
            <h1 className={styles.subtext}>Gallery</h1>
            <div className={styles.albumContainer}>
            <AlbumCard title={'San Juan'} date={'April 2, 2022'} images={['https://i.ibb.co/qsKcqTN/IMG-5160.jpg','https://i.ibb.co/qrGZrWc/IMG-7966.jpg','https://i.ibb.co/vBznht9/IMG-5163.jpg','https://i.ibb.co/tmY2ncc/IMG-7993.jpg']} link={'/gallery/San%20Juan'}/>
            <AlbumCard title={'Pateros'} date={'April 7, 2022'}  images={['https://i.ibb.co/2jmRjvt/IMG-8975.jpg','https://i.ibb.co/MG7ZyLy/IMG-5031.jpg','https://i.ibb.co/LCRSwPt/IMG-5030.jpg','https://i.ibb.co/VHzGDTZ/IMG-5026.jpg']} link={'/gallery/Pateros'}/>
            <AlbumCard title={'North Caloocan'} date={'April 9, 2022'}  images={['https://i.ibb.co/VY6FLqj/IMG-1177.jpg','https://i.ibb.co/M1ZGhB2/IMG-1174.jpg', 'https://i.ibb.co/1T8pkqj/IMG-1151.jpg','https://i.ibb.co/rFsnDqg/IMG-1090.jpg']} link={'/gallery/North%20Caloocan'}/>
            <AlbumCard title={'South Caloocan'} date={'April 9, 2022'}  images={['https://i.ibb.co/B21cQsw/DSCF9417.jpg','https://i.ibb.co/ChSdmbT/DSCF9353.jpg','https://i.ibb.co/k5fVXXw/DSCF9345.jpg','https://i.ibb.co/VgWxxQr/DSCF9278.jpg'] } link={'/gallery/South%20Caloocan'}/>
            <AlbumCard title={'Brgy Silangan, Quezon city'} date={'April 10, 2022'}  images={['https://i.ibb.co/5RXt2Sp/DSCF9352.jpg','https://i.ibb.co/6Zjhpww/DSCF9239.jpg', 'https://i.ibb.co/BKtfdCD/DSCF9271.jpg','https://i.ibb.co/3mhV0dL/DSCF9311.jpg']} link={'/gallery/Brgy%20Silangan%20Quezon%20City'}/>
            <AlbumCard title={'Mandaluyong city'} date={'April 12, 2022'}  images={['https://i.ibb.co/n3b2GLG/Whats-App-Image-2022-04-16-at-10-03-31-PM-1.jpg','https://i.ibb.co/M9ZHrdX/Whats-App-Image-2022-04-16-at-10-03-29-PM-1.jpg', 'https://i.ibb.co/DCb1Stc/Whats-App-Image-2022-04-16-at-10-03-26-PM-1.jpg','https://i.ibb.co/bz9sKmx/Whats-App-Image-2022-04-16-at-10-03-26-PM.jpg']} link={'/gallery/Mandaluyong'}/>
            </div>
        
        </Layout>
   
)}}

export default Gallery