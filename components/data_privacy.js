
import React from 'react'
import styles from '../styles/data_privacy.module.css'


class DataPrivacyConsent extends React.Component{
    constructor(){
        super();
        this.state = {
            DataPrivacyConsentAccepted: false
        }
    }

    handleTick=()=>{
        this.setState({DataPrivacyConsentAccepted: true})
    }
   render(){ return(
    <>
    {
    this.state.DataPrivacyConsentAccepted?    null:
    <div className={styles.consent_paragraph}>
    <h3 >Data Privacy Consent</h3>
    <p>Fugiat non magna in ad sit culpa sit fugiat dolore culpa qui. Excepteur aliquip Lorem in consectetur culpa enim in eu laborum eiusmod cupidatat qui nulla Lorem. Ex sint do mollit et ullamco consequat. Velit incididunt in laborum laborum duis in proident labore enim pariatur.</p>
    <input type={'checkbox'} required className={styles.checkbox} onClick={this.handleTick}/>
    </div>}
    </>
)}}
export default DataPrivacyConsent