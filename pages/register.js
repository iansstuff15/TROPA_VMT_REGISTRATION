import styles from '../styles/register.module.css'
import FormComponent from '../components/form'
const Register = ()=> (

    <div className={styles.container} >
    <div className={styles.disclaimer}>
    <h3>Disclaimer</h3>
    <p> I am providing this information willingly, with the understanding that it will be used solely for the purpose of volunteering under Solid Leni Pilipinas and its activities in support for the presidential and vice presidential campaign of Leni Robredo and Kiko Pangilinan for Halalan 2022.</p>
    </div>
   
   <FormComponent/>
   </div>
)
export default Register