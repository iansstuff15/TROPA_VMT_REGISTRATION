import InputComponent from "./input"
import styles from '../styles/form.module.css'
import React from "react";
import { useRouter, withRouter } from "next/router";
import DataPrivacyConsent from "./data_privacy";
import Thankyou from "./thankyou";
import DayComponent from "./day";


class FormComponent extends React.Component{
  
    constructor() {
        super();
        this.state = {
          
        firstName: "",
        lastName: "",
        Barrangay: "",
        City: "",
        phone: "",
        age:"",
        email: "",
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
        step:1,
        isSelected: false,
        };
      }

    handleChangeStep=()=>{
      this.setState({step: this.state.step + 1})
    }
    handleChangePreviousStep=()=>{
      this.setState({step: this.state.step - 1})
    }


    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
        console.log(event.target.id + ' event id')
        console.log(event.target.value + ' event value')
            console.log(event.target.name+' '+event.target.value + ' state: '+this.state[event.target.name])
     await  console.log(this.state)
          };
          handleSubmit = async (event) => {
           
            event.preventDefault();
            console.log(this.state)
            console.log(event.target.email.value + ' in submit');
        
           
            fetch('./api/email',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            fetch('./api/sheets',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            console.log(fetch('./api/sheets',{
              method:'POST',
              body: JSON.stringify(this.state)
            }))
            console.log('submitted');
            this.setState({step: this.state.step + 1})
      };
        
    handleDaySelect= async (event)=>{
   
     const  value =this.state[event.target.id]
   await    this.setState({ [event.target.id]: !value});
   console.log(this.state)
    }
    
    
    render(){return(
    <>   {
     
    this.state.step !== 5?
    <div>
        <form onSubmit={this.handleSubmit} >

      <DataPrivacyConsent/>
<div className={this.state.step!==1? styles.hide: null}>

<h1 className={styles.sectionTitle}>Personal</h1>
        <h1 className={styles.sectionSubtitle}>Information</h1>
        <InputComponent name={'firstName'} type={'text'} label={'First Name'} required  onChange={this.handleChange} id = {'firstName'} value={this.firstName} />
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}  required onChange={this.handleChange} id = {'lastName'} value={this.lastName}/>
        <InputComponent name={'age'} type={'number'}  label={'Age'}  required onChange={this.handleChange} id = {'age'} value={this.age}/>
        <InputComponent name={'Barrangay'} type={'text'} label={'Barrangay'}  required onChange={this.handleChange} id = {'Barrangay'} value={this.Barrangay}/>
        <InputComponent name={'City'} type={'text'} label={'City'}  required onChange={this.handleChange} id = {'City'} value={this.City}/>


<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>


</div>


<div className={this.state.step!==2? styles.hide: null}>

<h1 className={styles.sectionTitle }>Contact</h1>
         <h1>Information</h1>
         <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         
        <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>


<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>
<input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
</div>

<div className={this.state.step!==3? styles.hide: null}>
 <h1 className={styles.sectionTitle}>Volunteer</h1>
        <h1>Availablitity</h1>

      <DayComponent name={'Monday'}  id={'Monday'}   className={this.state.Monday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Tuesday'} id={'Tuesday'} className={this.state.Tuesday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Wednesday'} id={'Wednesday'} className={this.state.Wednesday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Thursday'} id={'Thursday'}  className={this.state.Thursday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Friday'} id={'Friday'} className={this.state.Friday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Saturday'} id={'Saturday'} className={this.state.Saturday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
      <DayComponent name={'Sunday'} id={'Sunday'} className={this.state.Sunday?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
       
<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>
<input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
</div>
 
        
    
<div className={this.state.step!==4? styles.hide: null}>



<h1 className={styles.sectionTitle}>Activities</h1>
        <h1>To Attend</h1>
        <input type={'submit'} className={styles.button}/><input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
</div>

 
 
 
 




        
      
      
     
               
        </form>

    </div>: 
    <Thankyou/>
    }
    </>

)}}

export default FormComponent