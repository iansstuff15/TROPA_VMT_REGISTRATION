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
        await console.log(this.state[event.target.id] + ' state')
          };


   render(){ return(
 
        <Layout>
            <h1 className={styles.title}>Photo</h1>
            <h1 className={styles.subtext}>Gallery</h1>
            <div className={styles.albumContainer}>
            <AlbumCard title={'San Juan'} date={'April 2, 2022'} images={['https://i.ibb.co/qsKcqTN/IMG-5160.jpg','https://i.ibb.co/qrGZrWc/IMG-7966.jpg','https://i.ibb.co/vBznht9/IMG-5163.jpg','https://i.ibb.co/tmY2ncc/IMG-7993.jpg']} link={'/gallery/San%20Juan'}/>
            <AlbumCard title={'Pateros'} date={'April 7, 2022'}  images={['https://i.ibb.co/qsKcqTN/IMG-5160.jpg','https://i.ibb.co/qrGZrWc/IMG-7966.jpg','https://i.ibb.co/vBznht9/IMG-5163.jpg','https://i.ibb.co/tmY2ncc/IMG-7993.jpg']} link={'/gallery/Pateros'}/>
            <AlbumCard title={'North Caloocan'} date={'April 9, 2022'}  images={['https://i.ibb.co/qsKcqTN/IMG-5160.jpg','https://i.ibb.co/qrGZrWc/IMG-7966.jpg','https://i.ibb.co/vBznht9/IMG-5163.jpg','https://i.ibb.co/tmY2ncc/IMG-7993.jpg'] } link={'/gallery/North%20Caloocan'}/>
            <AlbumCard title={'South Caloocan'} date={'April 9, 2022'}  images={['https://i.ibb.co/5RXt2Sp/DSCF9352.jpg','https://i.ibb.co/6Zjhpww/DSCF9239.jpg', 'https://i.ibb.co/BKtfdCD/DSCF9271.jpg','https://i.ibb.co/3mhV0dL/DSCF9311.jpg']} link={'/gallery/South%20Caloocan'}/>
            </div>
        
        </Layout>
   
)}}

export default Gallery