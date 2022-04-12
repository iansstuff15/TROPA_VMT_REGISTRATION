import React from "react";
import InputComponent from "../components/input"
import styles from '../styles/schedule.module.css'
class Schedule extends React.Component{
    constructor(){
        super()
        this.state = {
            concern: "",
            phone:"",
            email:"",
        }
    }

    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
        await console.log(this.state[event.target.id] + ' state')
          };


   render(){ return(
    <>
        <div>
            <h1>Choose your house to house</h1>
            <h2>Schedule</h2>
            <form>
            <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
  
                <textarea  id="concern" required onChange={this.handleChange} className={styles.concern}/>
                <input type={'submit'}/>
            </form>
        </div>
    </>
)}}

export default Schedule