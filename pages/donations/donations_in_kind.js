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
            phone:"",
            email:"",
            date_recieved: "",
            received_by:"",
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
     await console.log(this.state.RID)
     await this.setState({RID: encryptertext})
        await console.log(this.state[event.target.id] + ' state')
        await console.log(this.state)
          };

    handleSubmit = async (event) => {
           
            event.preventDefault();
         
           
            // fetch('./api/email',{
            //   method:'POST',
            //   body: JSON.stringify(this.state)
            // });
            fetch('../api/donations_in_kind',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            
         
            this.setState({step: this.state.step + 1})
      };


   render(){ return(
    <>
        <Layout>
      {      
      this.state.step ==1?
     <> 
      <h1 className={styles.title}>Record Your</h1>
            <h2 className={styles.subtext}>In-Kind Donation</h2>
            <form onSubmit={this.handleSubmit}>
        <div className={styles.RID_container}>
        <p><strong>RID</strong> <br/>{this.state.RID}</p>
        </div>

        <InputComponent name={'firstName'} type={'text'}  label={'First Name'} required onChange={this.handleChange} id = {'firstName'} value = {this.firstName}/>
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}required onChange={this.handleChange} id = {'lastName'} value = {this.lastName}/>
        <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
        <InputComponent name={'received_by'} type={'text'}  label={'Received By'}required onChange={this.handleChange} id = {'received_by'} value = {this.received_by}/>
         <InputComponent name={'date_recieved'} type={'date'}  label={'Date Recieved'}required onChange={this.handleChange} id = {'date_recieved'} value = {this.date_recieved}/>
        
<div>
<input type={'submit'} className={styles.button}/>
</div>
              
            </form>
            </>
            :
            <Thankyou reason={'sending in kind donation'} toNavigate={'/'} buttonText={'Go back to mainpage'}/>
            }
        </Layout>
    </>
)}}

export default Donations