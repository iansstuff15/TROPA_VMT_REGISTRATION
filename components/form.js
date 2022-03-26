import InputComponent from "./input"
import styles from '../styles/form.module.css'
const FormComponent = () => (
    <div>
        <form>
        <h1 className={styles.sectionTitle}>Personal</h1>
        <h1 className={styles.sectionSubtitle}>Information</h1>
        <InputComponent name={'firstName'} type={'text'} label={'First Name'} required/>
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}  required/>
        <InputComponent name={'Barrangay'} type={'text'} label={'Barrangay'}  required/>
        <InputComponent name={'City'} type={'text'} label={'City'}  required/>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <h1>Information</h1>
        <InputComponent name={'phone'} type={'tel'}  label={'Contact Number'}required/>
        <InputComponent name={'email'} type={'email'} label={'Email Address'}  required/>
        <h1 className={styles.sectionTitle}>Volunteer</h1>
        <h1>Availablitity</h1>
        <InputComponent name={'availability'} type={'checkbox'}  label={'Monday'}required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Tuesday'}  required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Wednesday'}  required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Thursday'}  required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Friday'}  required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Saturday'}  required/>
        <InputComponent name={'availability'} type={'checkbox'} label={'Sunday'}  required/>
        <InputComponent type={'submit'}/>
               
        </form>

    </div>
)

export default FormComponent