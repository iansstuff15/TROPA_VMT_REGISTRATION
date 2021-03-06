import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from "react";

import {RiMenu3Fill} from 'react-icons/ri'
import styles from '../styles/header.module.css'

const Header = () =>{ 
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
        <Link href={'/'}>
        <Image src={logo}alt="logo"
      width={100}
      height={100}/>
        </Link>
     
     
        { isDesktop <= 1052? null:
       <>
       
         <Link href={'/concerns'} ><strong className={styles.navigation_link}>Concerns</strong></Link>
         <Link href={'/get_shirt'} ><strong className={styles.navigation_link}>AngatLeta Shirt</strong></Link>
          <Link href={'/donations/public_monetary'} ><strong className={styles.navigation_link}>Monetary Donations</strong></Link>
          <Link href={'/donations/public_in_kind'} ><strong className={styles.navigation_link}>In-Kind Donations</strong></Link>
          <Link href={'/gallery'} ><strong className={styles.navigation_link}>Gallery</strong></Link>
     
       </>
     }
      
      { isDesktop <= 1052?
      <>

<span className={styles.menu} onClick={handleClick}>
       
       <RiMenu3Fill size={30} />
      </span>


      </>
     :null
     }
    </header >
   { isOpen && isDesktop <= 1052?  <div className={styles.bar}>
 
   <Link href={'/gallery'} ><strong className={styles.links_in_bar} >Gallery</strong></Link>
        
          <Link href={'/donations/public_monetary'} ><strong className={styles.links_in_bar}>Monetary Donations</strong></Link>
          <Link href={'/donations/public_in_kind'} ><strong className={styles.links_in_bar}>In-Kind Donations</strong></Link>
          <Link href={'/get_shirt'} ><strong className={styles.links_in_bar}>AngatLeta Shirt</strong></Link>
          <Link href={'/concerns'} ><strong className={styles.links_in_bar}>Concerns</strong></Link>
     </div> :null}
    </>
)}

export default Header