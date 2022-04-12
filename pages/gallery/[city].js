
import { useRouter } from "next/router";
import React from "react";
import AlbumCard from "../../components/album_card";
import InputComponent from "../../components/input"
import Layout from "../../components/layout";
import styles from '../../styles/city.module.css'
const City = ()=>{ 
    
    const router = useRouter()
    const {city} = router.query
    return(
 
        <Layout>
            <h1 className={styles.title}>Photo</h1>
            <h1 className={styles.subtext}>Gallery</h1>
            <h1 className={styles.city}>{city}</h1>
            <div className={styles.albumContainer}>
          
            </div>
        
        </Layout>
   
)}

export default City