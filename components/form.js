import InputComponent from "./input"
import styles from '../styles/form.module.css'
import React from "react";


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
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: "",
        };
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
        
            console.log('submitted');
            fetch('./api/email',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
      };
        
    handleSheets = async () =>{
        const request = {
            // The ID of the spreadsheet to update.
            spreadsheetId: '16-cmNiYNJyy0B4E8HHCDhU8vQwkpxH7_VKlNR7QO39Y',  // TODO: Update placeholder value.
        
            // The A1 notation of a range to search for a logical table of data.
            // Values are appended after the last row of the table.
            range: 'A2',  // TODO: Update placeholder value.
        
            // How the input data should be interpreted.
            valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.
        
            // How the input data should be inserted.
            insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
        
            resource: {
              // TODO: Add desired properties to the request body.
              'values':[
                  [
                      this.state.firstName,this.state.lastName,this.state.email,this, this.state.age,
                  ]
              ]
            },
        
            auth: authClient,
          };
        
          try {
            const response = (await sheets.spreadsheets.values.append(request)).data;
            // TODO: Change code below to process the `response` object:
            console.log(JSON.stringify(response, null, 2));
          } catch (err) {
            console.error(err);
          }
    };
    
    render(){return(
    <div>
        <form onSubmit={this.handleSubmit} >
        <h1 className={styles.sectionTitle}>Personal</h1>
        <h1 className={styles.sectionSubtitle}>Information</h1>
        <InputComponent name={'firstName'} type={'text'} label={'First Name'} required  onChange={this.handleChange} id = {'firstName'} value={this.firstName}/>
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}  required onChange={this.handleChange} id = {'lastName'} value={this.lastName}/>
        <InputComponent name={'Barrangay'} type={'text'} label={'Barrangay'}  required onChange={this.handleChange} id = {'Barrangay'} value={this.Barrangay}/>
        <InputComponent name={'City'} type={'text'} label={'City'}  required onChange={this.handleChange} id = {'City'} value={this.City}/>
        <h1 className={styles.sectionTitle }>Contact</h1>
        <h1>Information</h1>
        <InputComponent name={'phone'} type={'tel'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
        <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
        <h1 className={styles.sectionTitle}>Volunteer</h1>
        <h1>Availablitity</h1>
        <InputComponent name={'Monday'} type={'checkbox'}  label={'Monday'} onChange={this.handleChange} id = {'Monday'} value={this.Monday}/>
        <InputComponent name={'Tuesday'} type={'checkbox'} label={'Tuesday'}   onChange={this.handleChange} id = {'Tuesday'} value={this.Tuesday}/>
        <InputComponent name={'Wednesday'} type={'checkbox'} label={'Wednesday'} onChange={this.handleChange} id = {'Wednesday'} value={this.Wednesday}/>
        <InputComponent name={'Thursday'} type={'checkbox'} label={'Thursday'}   onChange={this.handleChange} id = {'Thursday'} value={this.Thursday}/>
        <InputComponent name={'Friday'} type={'checkbox'} label={'Friday'}   onChange={this.handleChange} id = {'Friday'} value={this.Friday}/>
        <InputComponent name={'Saturday'} type={'checkbox'} label={'Saturday'}   onChange={this.handleChange} id = {'Saturday'} value={this.Saturday}/>
        <InputComponent name={'Sunday'} type={'checkbox'} label={'Sunday'}  onChange={this.handleChange} id = {'Sunday'} value={this.Sunday}/>
        <InputComponent type={'submit'}/>
               
        </form>

    </div>
)}}

export default FormComponent