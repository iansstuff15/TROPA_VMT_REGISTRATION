import React from "react";
import InputComponent from "../../components/input"
import styles from '../styles/donations.module.css'
import encrypt from 'crypto-js'

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
            fetch('./api/donations_monetary',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            
         
            this.setState({step: this.state.step + 1})
      };


   render(){ return(
    <>
        <div className={styles.container}>
            <h1>Record</h1>
            <h2>Donation</h2>
            <form onSubmit={this.handleSubmit}>
        <h1>RID <br/>{this.state.RID}</h1>
        <InputComponent name={'firstName'} type={'text'}  label={'First Name'} required onChange={this.handleChange} id = {'firstName'} value = {this.firstName}/>
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}required onChange={this.handleChange} id = {'lastName'} value = {this.lastName}/>
        <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
        <h3>Deposited to</h3>
         <select name="mode" id="mode" value={this.mode} onChange={this.handleChange}>
            <option value="Gcash">Gcash</option>
            <option value="Landbank">Landbank</option>
            <option value="BDO">BDO</option>
        </select>
        <InputComponent name={'referenceNumber'} type={'number'}  label={'Reference Number'}required onChange={this.handleChange} id = {'RefNum'} value = {this.RefNum}/>
         <InputComponent name={'amount'} type={'number'}  label={'Donated Amount'}required onChange={this.handleChange} id = {'amount'} value = {this.amount}/>
         <InputComponent name={'date_recieved'} type={'date'}  label={'Date Recieved'}required onChange={this.handleChange} id = {'date_recieved'} value = {this.date_recieved}/>
  

                <input type={'submit'}/>
            </form>
        </div>
    </>
)}}

export default Donations