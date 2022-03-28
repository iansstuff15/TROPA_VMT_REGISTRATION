import styles from '../styles/data_privacy.module.css'
const DataPrivacyConsent = () => (
    <div className={styles.consent_paragraph}>
    <h3 >Data Privacy Consent</h3>
    <p>Fugiat non magna in ad sit culpa sit fugiat dolore culpa qui. Excepteur aliquip Lorem in consectetur culpa enim in eu laborum eiusmod cupidatat qui nulla Lorem. Ex sint do mollit et ullamco consequat. Velit incididunt in laborum laborum duis in proident labore enim pariatur.</p>
    <input type={'checkbox'} required className={styles.checkbox}/>
    </div>
)
export default DataPrivacyConsent