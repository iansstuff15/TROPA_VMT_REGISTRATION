import React from "react";
import InputComponent from "../../components/input"

import encrypt from 'crypto-js'
import Layout from "../../components/layout";
import styles from '../../styles/donations.module.css'
import Thankyou from "../../components/thankyou";
const encryptAlgorithm = encrypt

class Donations extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            mode:"",
            amount: "",
            RefNum:"",
            phone:"",
            email:"",
            date_recieved: "",
            screenshot: "",
            RID: '',
            step:1,
        }
    }
 
    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
        const index = Math.floor((Math.random() * event.target.value.length) + 1);
        await this.setState({RID:this.state['RID']+ event.target.value.charAt(index)})


     const encryptertext =   await   encryptAlgorithm.SHA256(this.state['RID']).toString()
     await this.setState({RID:null})
   
     await this.setState({RID: encryptertext})
  
          };

    handleSubmit = async (event) => {
           
            event.preventDefault();
         
           
            // fetch('./api/email',{
            //   method:'POST',
            //   body: JSON.stringify(this.state)
            // });
            fetch('../api/donations_monetary',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            
         
            this.setState({step: this.state.step + 1})
      };


   render(){ return(
    <>
        <Layout>
     {   this.state.step ==1? <>   <h1 className={styles.title}>Record Your</h1>
            <h2 className={styles.subtext}>Monetary Donation</h2>
            <form onSubmit={this.handleSubmit}>
        <div className={styles.RID_container}>
        <p><strong>RID</strong> <br/>{this.state.RID}</p>
        </div>

        <InputComponent name={'firstName'} type={'text'}  label={'First Name'} required onChange={this.handleChange} id = {'firstName'} value = {this.firstName}/>
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}required onChange={this.handleChange} id = {'lastName'} value = {this.lastName}/>
        <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
        <h3>Deposited to</h3>
        <div className={styles.landBank_card}>
        <h5 className={styles.text}>Landbank of the Philippines</h5>
        <h5 className={styles.text}>Marita Margaret Ortega</h5>
        <h4 className={styles.text}>3347021708</h4>
        </div>
        <div className={styles.BPI_card}>

        <h5 className={styles.text}>BPI</h5>
        <h5 className={styles.text}>Juan Lorenzo S Cruz</h5>
        <h4 className={styles.text}>4289153727</h4>
        </div>
        <div className={styles.Gcash_card}>
            
        <h5 className={styles.text}>GCASH</h5>
        <h5 className={styles.text}>Diriangen Lempira Powell</h5>
        <h4 className={styles.text}>09274552015</h4>
        </div>
         <select name="mode" id="mode" value={this.mode} onChange={this.handleChange} className={styles.select}>
            <option value="Gcash" className={styles.option}>Gcash</option>
            <option value="Landbank" className={styles.option}>Landbank</option>
            <option value="BPI" className={styles.option}>BPI</option>
        </select>
        <InputComponent name={'referenceNumber'} type={'number'}  label={'Reference Number'}required onChange={this.handleChange} id = {'RefNum'} value = {this.RefNum}/>
         <InputComponent name={'amount'} type={'number'}  label={'Donated Amount'}required onChange={this.handleChange} id = {'amount'} value = {this.amount}/>
         <InputComponent name={'date_recieved'} type={'date'}  label={'Date Donated'}required onChange={this.handleChange} id = {'date_recieved'} value = {this.date_recieved}/>
        
<div>
<input type={'submit'} className={styles.button}/>
</div>
              
            </form>
            </>
:
<Thankyou reason={'your monetary donation'} toNavigate={'/'} buttonText={'Go back to mainpage'}/>

            }
        </Layout>
    </>
)}}

export default Donations