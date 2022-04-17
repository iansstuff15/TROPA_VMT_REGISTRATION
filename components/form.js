import InputComponent from "./input"
import styles from '../styles/form.module.css'
import React from "react";
import { useRouter, withRouter } from "next/router";
import DataPrivacyConsent from "./data_privacy";
import Thankyou from "./thankyou";
import DayComponent from "./day";
import ActivityTile from "./acitivity_tile";
import OtherAssistance from "./other_assitance";
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';


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
        landyardMaking:false,
        tarpPrintingAndCutting: false,
        TshirtPrinting: false,
        MuralPainting:false,
        DataEncoding: false,
        HouseToHouse:false,
        MonetaryDonation: false,
        CampaignMaterials: false,
        InKind:false,
        Apr6: false,
        Apr7: false,
        Apr12: false,
        Apr13: false,
        Apr20: false,
        Apr21: false,
        Apr27: false,
        Apr28: false,
        Apr29: false,
        Apr3: false,
        Apr9: false,
        Apr10: false,
        Apr23: false,
        Apr24: false,
        Apr30: false,
        others:"",
        schedule: [],
        };
      }

    notify = (message) => toast.error(message);

    handleChangeStep=()=>{
      this.setState({step: this.state.step + 1})
    if(this.state.step >=1){
      if(this.state.firstName == '' || this.state.lastName =='' || this.state.age =='' || this.state.Barrangay ==''|| this.state.City ==''){

        this.notify(`incomplete form please fill up fields in personal information`)
      }

  
    }
      if(this.state.step >=2){
        if(this.state.phone ==''||this.state.email ==''){

          this.notify(`incomplete form please fill up fields in contact information`)
        }
      }
      
    }
    handleChangePreviousStep=()=>{
      this.setState({step: this.state.step - 1})
    }


    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
       
          };
   handleSubmit = async (event) => {
           
            event.preventDefault();
         
           
            fetch('./api/email',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            fetch('./api/sheets',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            
         
            this.setState({step: this.state.step + 1})
      };
        
    handleDaySelect= async (event)=>{
   
     const  value =this.state[event.target.id]
   await    this.setState({ [event.target.id]: !value});
 
    }
    
    
    render(){return(
    <>   {
     
    this.state.step !== 6?
    <div>

        <form onSubmit={this.handleSubmit} >
     <div>
       
        <ToastContainer />
      </div>
      <DataPrivacyConsent/>
    
<div className={this.state.step!==1? styles.hide: null}>

<h1 className={styles.sectionTitle}>Personal</h1>
        <h1 className={styles.sectionSubtitle}>Information</h1>
    
        <InputComponent name={'firstName'}  autoCapitalize={"true"}   type={'text'} label={'First Name'} required  onChange={this.handleChange} id = {'firstName'} value={this.firstName} />
        <InputComponent name={'lastName'}  autoCapitalize="true"  type={'text'}  label={'Last Name'}  required onChange={this.handleChange} id = {'lastName'} value={this.lastName}/>
        <InputComponent name={'age'} type={'number'}  label={'Age'}  required onChange={this.handleChange} id = {'age'} value={this.age}/>
        <InputComponent name={'Barrangay'}  autoCapitalize="true"  type={'text'} label={'Barangay'}  required onChange={this.handleChange} id = {'Barrangay'} value={this.Barrangay}/>
        <InputComponent name={'City'}  autoCapitalize="true"  type={'text'} label={'City'}  required onChange={this.handleChange} id = {'City'} value={this.City}/>


<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>


</div>


<div className={this.state.step!==2? styles.hide: null}>

<h1 className={styles.sectionTitle }>Contact</h1>
         <h1>Information</h1>
         <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         
        <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>

<div>
<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>
<input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
</div>

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
    <div>
    <input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>
<input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
      </div>   

</div>
 
<div className={this.state.step!==4? styles.hide: null}>



<h1 className={styles.sectionTitle}>Activities</h1>
<h1>To Attend</h1>
<p>Location: Head Quarters @ Cubao – with snacks for volunteers! 😊</p>
<ActivityTile name={'Lanyard making'} id={'landyardMaking'}   className={this.state.landyardMaking?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'Tarp printing and cutting'} id={'tarpPrintingAndCutting'}   className={this.state.tarpPrintingAndCutting?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'T-shirt printing – with snacks'} id={'TshirtPrinting'}   className={this.state.TshirtPrinting?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'Mural-painting around the Cubao HQ'} id={'MuralPainting'}   className={this.state.MuralPainting?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<p>Location: Remote work</p>
<ActivityTile name={'Data encoding'} id={'DataEncoding'}   className={this.state.DataEncoding?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<p>Location: Target areas include malls, churches, LRT, etc. Locations will be determined by organizers! – with snacks and transpo for volunteers! 😊</p>
<ActivityTile name={'House to house visits to campaign for VP Leni'} id={'HouseToHouse'}   className={this.state.HouseToHouse?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
{
  this.state.HouseToHouse?
  <>
  <h1>Choose your schedule</h1>
<h1>Weekdays</h1>
{/* <ActivityTile name={'April 6, 2022'} id={'Apr6'}   className={this.state.Apr6?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/> */}
<ActivityTile name={'April 7, 2022'} id={'Apr7'}   className={this.state.Apr7?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 12, 2022'} id={'Apr12'}   className={this.state.Apr12?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 13, 2022'} id={'Apr13'}   className={this.state.Apr13?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 20, 2022'} id={'Apr20'}   className={this.state.Apr20?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 21, 2022'} id={'Apr21'}   className={this.state.Apr21?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 27, 2022'} id={'Apr27'}   className={this.state.Apr27?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 28, 2022'} id={'Apr28'}   className={this.state.Apr28?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 29, 2022'} id={'Apr29'}   className={this.state.Apr29?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<h1>Weekends</h1>
<ActivityTile name={'April 3, 2022'} id={'Apr3'}   className={this.state.Apr3?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 9, 2022'} id={'Apr9'}   className={this.state.Apr9?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 10, 2022'} id={'Apr18'}   className={this.state.Apr18?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 23, 2022'} id={'Apr23'}   className={this.state.Apr23?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 24, 2022'} id={'Apr24'}   className={this.state.Apr24?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<ActivityTile name={'April 30, 2022'} id={'Apr30'}   className={this.state.Apr30?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
  </>: null
}
<div>
<input type={'button'} value={'Next Step'} className={styles.button} onClick={this.handleChangeStep}/>
<input type={'button'} className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/>  
</div>

</div>
    
    
<div className={this.state.step!==5? styles.hide: null}>



<h1 className={styles.sectionTitle}>Willing to support</h1>
<h1>the TRoPa campaign through other means?</h1>

<OtherAssistance name={'Monetary donation'} id={'MonetaryDonation'}   className={this.state.MonetaryDonation?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<OtherAssistance name={'Campaign materials '} id={'CampaignMaterials'}   className={this.state.CampaignMaterials?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<OtherAssistance name={'In-kind (food for volunteers)'} id={'InKind'}   className={this.state.InKind?styles.container_selected: styles.container_unselected} onClick={this.handleDaySelect}/>
<h3>Others</h3>

    <textarea  onChange={this.handleChange}  id = {'others'} value = {this.others} className={styles.othersField}/>
   
      <div>
      <input type={'submit'} className={styles.button}/><input type={'button'}  className={styles.button} value={'Previous Step'} onClick={this.handleChangePreviousStep}/> 
      </div>
 
</div>

 
 
 
 




        
      
      
     
               
        </form>

    </div>: 
    <Thankyou reason={'raising your concern '} toNavigate={'/'} buttonText={'Go back to registration page'}/>
    }
    </>

)}}

export default FormComponent