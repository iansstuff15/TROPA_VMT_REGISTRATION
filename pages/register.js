import styles from '../styles/register.module.css'
import Image from 'next/image'

import FormComponent from '../components/form'
import Layout from '../components/layout'
const Register = ()=> (

    <Layout>

    <div className={styles.disclaimer}>
    <h3>Disclaimer</h3>
    <p> I am providing this information willingly, with the understanding that it will be used solely for the purpose of volunteering under Solid Leni Pilipinas and its activities in support for the presidential and vice presidential campaign of Leni Robredo and Kiko Pangilinan for Halalan 2022.</p>
    </div>
   
   <FormComponent/>
   </Layout>
)
export default Register