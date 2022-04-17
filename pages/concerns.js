import React from "react";
import Header from "../components/header";
import InputComponent from "../components/input"
import Layout from "../components/layout";
import Thankyou from "../components/thankyou";
import styles from '../styles/concerns.module.css'
class Concerns extends React.Component{
    constructor(){
        super()
        this.state = {
            concern: "",
            phone:"",
            email:"",
            step:1,
        }
    }

    handleChange = async(event) => {
    
        await this.setState({ [event.target.id]: event.target.value });
 
          };
         handleSubmit = async (event) => {
           
            event.preventDefault();
         
           
            fetch('./api/concern',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
         
         
            this.setState({step: this.state.step + 1})
      };

   render(){ return(

   
        <Layout>
       
      {
      this.state.step==1?
      <>
      <h1 className={styles.title}>Tell us something about</h1>
            <h2 className={styles.subtext}>Your Concern</h2>
            <form onSubmit={this.handleSubmit}>
            <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone}/>
         
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email}/>
        <h3 className={styles.label}>Concern</h3>
                <textarea  id="concern" required onChange={this.handleChange} className={styles.concern}/>
                <input type={'submit'} className={styles.button}/>
            </form>
            </>:<Thankyou reason={'raising your concern '} toNavigate={'/concerns'} buttonText={'Submit another concern'}/>
            }
        </Layout>
  
)}}

export default Concerns