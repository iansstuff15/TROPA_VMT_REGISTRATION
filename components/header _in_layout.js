import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import styles from '../styles/header_in_layout.module.css'

import {RiMenu3Fill} from 'react-icons/ri'

const Header = () => {
    
    const [isDesktop, setDesktop] = useState();
    const [isOpen, setOpen] = useState(false);
    const updateMedia = () => {
      setDesktop(window.innerWidth);
    };
    
    useEffect(() => {
        
      window.addEventListener("resize", updateMedia);



  

      return () => window.removeEventListener("resize", updateMedia);
    },[]);


    const handleClick = () => {
        // setOpen()
        setOpen(!isOpen)
       
    }


    return(





<>
    <header className={styles.header}>
      
      
       { isDesktop <= 1052? null:
       <>
        <Link href={'/register'} ><strong className={styles.button}>Join Now</strong></Link>
         <Link href={'/concerns'} ><strong className={styles.navigation_link}>Concerns</strong></Link>
         <Link href={'/get_shirt'} ><strong className={styles.navigation_link}>AngatLeta Shirt</strong></Link>
          <Link href={'/donations/public_monetary'} ><strong className={styles.navigation_link}>Monetary Donations</strong></Link>
          <Link href={'/donations/public_in_kind'} ><strong className={styles.navigation_link}>In-Kind Donations</strong></Link>
          <Link href={'/gallery'} ><strong className={styles.navigation_link}>Gallery</strong></Link>
          <Link href={'/'} ><strong className={styles.navigation_link}>Home</strong></Link>
       </>
     }
      
      { isDesktop <= 1052?
      <>

<span className={styles.menu} onClick={handleClick}>
       
       <RiMenu3Fill size={30} />
      </span>

<Link href={'/register'} ><strong className={styles.button}>Join Now</strong></Link>
      </>
     :
   null
     }
    </header >
   { isOpen && isDesktop <= 1052?  <div className={styles.bar}>
   <Link href={'/'} ><strong className={styles.links_in_bar}>Home</strong></Link>
   <Link href={'/gallery'} ><strong className={styles.links_in_bar} >Gallery</strong></Link>
        
          <Link href={'/donations/public_monetary'} ><strong className={styles.links_in_bar}>Monetary Donations</strong></Link>
          <Link href={'/donations/public_in_kind'} ><strong className={styles.links_in_bar}>In-Kind Donations</strong></Link>
          <Link href={'/get_shirt'} ><strong className={styles.links_in_bar}>AngatLeta Shirt</strong></Link>
          <Link href={'/concerns'} ><strong className={styles.links_in_bar}>Concerns</strong></Link>
     </div> :null}
    </>

)}

export default Header