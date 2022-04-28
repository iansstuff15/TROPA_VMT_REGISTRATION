import React from "react";
import InputComponent from "../components/input"
import Image from 'next/image'
import encrypt from 'crypto-js'
import Layout from "../components/layout";
import styles from '../styles/donations.module.css'
import Thankyou from "../components/thankyou";
const encryptAlgorithm = encrypt
import ImageGallery from 'react-image-gallery';
import PhotoCarousel from "../components/photo_carousel";

class GetShirt extends React.Component{
    
    



    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            mode:"Gcash",
            amount: "",
            RefNum:"",
            phone:"",
            email:"",
            date_recieved: "",
            screenshot: "",
            RID: '',
            step:1,
            quantity: '',
            size: 'M',
            color:'Black_Angatleta',
            shirt:'front',
            black_front: 'https://i.ibb.co/tHLjpZN/ANG-ATLETA-SHIRT-MOCKUP-BLACK-WHITEBG-FRONT.png',
            black_back: 'https://i.ibb.co/QNjfppQ/ANG-ATLETA-SHIRT-MOCKUP-BLACK-WHITEBG-BACK.png',
            white_front: 'https://i.ibb.co/N7Hfxrr/ANG-ATLETA-SHIRT-MOCKUP-WHITE-WHITEBG-FRONT.png',
            white_back: 'https://i.ibb.co/fCJdPYw/ANG-ATLETA-SHIRT-MOCKUP-WHITE-WHITEBG-BACK.png', 
            black_one_pink_fight:'https://i.ibb.co/02zyyBv/ANG-ATLETA-SHIRT-MOCKUP-ONEPINKFIGHT-BLACK-FRONT-ONLY.png',
            black_v2_one_pink_fight:'https://i.ibb.co/GWkTC79/ANG-ATLETA-SHIRT-MOCKUP-ONEPINKFIGHT-BLACK-V2.png',
            white_one_pink_fight:'https://i.ibb.co/vVtZ3XQ/ANG-ATLETA-SHIRT-MOCKUP-ONEPINKFIGHT-WHITE-FRONT-ONLY-WHITEBG.png',
        }
    }
 
    handleChange = async(event) => {
        
        await this.setState({ [event.target.id]: event.target.value });
        const index = Math.floor((Math.random() * event.target.value.length) + 1);
        await this.setState({RID:this.state['RID']+ event.target.value.charAt(index)})


     const encryptertext =   await   encryptAlgorithm.MD5(this.state['RID']).toString()
     await this.setState({RID:null})
   
     await this.setState({RID: encryptertext})
  
          };
    handleColorSwitch = async(event) => {
        event.preventDefault();
        await this.setState({ color: event.target.id });
        await console.log(this.state)
    }
    handleImageSwitch = async(event) => {
        event.preventDefault();
        await this.setState({ shirt: event.target.id });
      
    }
    handleSizeSwitch = async(event) => {
        event.preventDefault();
        await this.setState({ size: event.target.id });
      
    }
    handleSubmit = async (event) => {

            event.preventDefault();
         
           
            // fetch('./api/email',{
            //   method:'POST',
            //   body: JSON.stringify(this.state)
            // });
            fetch('../api/order_shirt',{
              method:'POST',
              body: JSON.stringify(this.state)
            });
            
         
            this.setState({step: this.state.step + 1})
      };


   render(){ return(
    <>
        <Layout>
     {   this.state.step ==1? <>   <h1 className={styles.title}>Order Your</h1>
            <h2 className={styles.subtext}>Angatleta Shirt</h2>
            <form onSubmit={this.handleSubmit}>
     
<br/>
<div className={styles.RID_container}>
        <p><strong>RID</strong> <br/>{this.state.RID}</p>
 </div>
<div className={styles.shirt_container}>
{    this.state.color =='Black_Angatleta'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.black_front:this.state.black_back} width={700} height={900} objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.black_front} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
    <Image src={this.state.black_back} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="back" onClick={this.handleImageSwitch}/>
    </div>
  
    <br/>
</div>:
null
  }
  {    this.state.color =='White_Angatleta'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.white_front:this.state.white_back} width={500} height={600} objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.white_front} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
    <Image src={this.state.white_back} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="back" onClick={this.handleImageSwitch}/>
    </div>
  
    <br/>
</div>:
null
  }
  {    this.state.color =='Black_OnePinkFight'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.black_one_pink_fight:this.state.black_back} width={500} height={600} objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.black_one_pink_fight} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
    {/* <Image src={this.state.black_back} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="back" onClick={this.handleImageSwitch}/> */}
    </div>
  
    <br/>
</div>:
null
  }
  {    this.state.color =='Black2_OnePinkFight'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.black_v2_one_pink_fight:this.state.black_back} width={500} height={600} objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.black_v2_one_pink_fight} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
   
    </div>
  
    <br/>
</div>:
null
  }
  {    this.state.color =='White_OnePinkFight'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.white_one_pink_fight:this.state.black_back} width={500} height={600} objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.white_one_pink_fight} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
  
    </div>
  
    <br/>
</div>:
null
  }

 <div>
 <div>
    <br/>
    <h3>Options</h3>
    <div className={styles.options_container}>
    <div className={this.state.color == 'Black_Angatleta'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black_Angatleta" onClick={this.handleColorSwitch}><div><Image id="Black_Angatleta"  src={'https://i.ibb.co/KxzPmJf/black-angatleta.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black_Angatleta" >AngatLeta</strong></div>
        <div className={this.state.color == 'White_Angatleta'?  styles.color_picker_selected:styles.color_picker_unselected} id="White_Angatleta" onClick={this.handleColorSwitch}> <div><Image   id="White_Angatleta" src={'https://i.ibb.co/y4szrFX/white-angatleta.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong  id="White_Angatleta" >AngatLeta</strong></div>
        <div className={this.state.color == 'Black_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="Black_OnePinkFight" src={'https://i.ibb.co/zGMMh4C/black-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black_OnePinkFight" >One Pink Fight</strong></div>
        <div className={this.state.color == 'Black2_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black2_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="Black2_OnePinkFight" src={'https://i.ibb.co/dr3z2Gh/black-v2-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black2_OnePinkFight" >One Pink Fight</strong></div>
        <div className={this.state.color == 'White_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="White_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="White_OnePinkFight" src={'https://i.ibb.co/qWb5ynt/white-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="White_OnePinkFight">One Pink Fight</strong></div>
    </div>
    
    </div>
    <br/>
    <h3>Sizes</h3>
        <strong className={this.state.size == 'S'?  styles.color_picker_selected:styles.color_picker_unselected} id="S" onClick={this.handleSizeSwitch}>S</strong>
        <strong className={this.state.size == 'M'?  styles.color_picker_selected:styles.color_picker_unselected} id="M" onClick={this.handleSizeSwitch}>M</strong>
        <strong className={this.state.size == 'L'?  styles.color_picker_selected:styles.color_picker_unselected} id="L" onClick={this.handleSizeSwitch}>L</strong>
        <strong className={this.state.size == 'XL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XL" onClick={this.handleSizeSwitch}>XL</strong>
        <strong className={this.state.size == 'XXL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XXL" onClick={this.handleSizeSwitch}>XXL</strong>
        <br/>
    <br/>
    <br/>
    <InputComponent name={'quantity'} type={'number'}  label={'Quantity'}required onChange={this.handleChange} id = {'quantity'} value = {this.quantity} />
  <br/>
  <div className={styles.RID_container}>
        <strong>Note<br/></strong>
        <p><strong>Price: </strong> <br/>₱ {this.state.quantity==''? 299 : this.state.quantity * 299 }.00</p>
        <p><strong>Order Distribution Date and Time: </strong> <br/>May 2, 2022 from 8:00 A.M. to 7:00 P.M.</p>
        <p><strong>Order Distribution Place: </strong> <br/> 19 Lasalle St., Brgy Silangan Cubao, QC</p>
     
 </div>

</div>
  <br/>
   
 
</div>




        <InputComponent name={'firstName'} type={'text'}  label={'First Name'} required onChange={this.handleChange} id = {'firstName'} value = {this.firstName} />
        <InputComponent name={'lastName'} type={'text'}  label={'Last Name'}required onChange={this.handleChange} id = {'lastName'} value = {this.lastName} />
        <InputComponent name={'phone'} type={'number'}  label={'Contact Number'}required onChange={this.handleChange} id = {'phone'} value = {this.phone} />
         <InputComponent name={'email'} type={'email'} label={'Email Address'}  required onChange={this.handleChange} id = {'email'} value={this.email} />
        
         <br/>
   
        <h3>Accounts</h3>  

       <div className={styles.landBank_card}>
        <h5 className={styles.text}>BDO</h5>
        <h5 className={styles.text}>010720017726</h5>
        <h4 className={styles.text}>3347021708</h4>
        </div>
      
        <div className={styles.Gcash_card}>
            
        <h5 className={styles.text}>GCASH</h5>
        <h5 className={styles.text}>Juan Lorenzo S Cruz</h5>
        <h4 className={styles.text}>09175933925</h4>
        </div>
        
        <div className={styles.BPI_card}>
        <h5 className={styles.text}>BPI</h5>
        <h5 className={styles.text}>Juan Lorenzo S Cruz</h5>
        <h4 className={styles.text}>4289153727</h4>
        </div>

         <select name="mode" id="mode" value={this.mode} onChange={this.handleChange} className={styles.select}>
            <option value="Gcash" className={styles.option}>Gcash</option>
            <option value="BDO" className={styles.option}>BDO</option>
            <option value="BPI" className={styles.option}>BPI</option>
        </select>
        <InputComponent name={'referenceNumber'} type={'number'}  label={'Reference Number'} onChange={this.handleChange} id = {'RefNum'} value = {this.RefNum} required/>

       
        
<div>

<input type={'submit'} className={styles.button} value={'Place Order'}/>
</div>
              
            </form>
            </>
:
<Thankyou reason={'your order'} toNavigate={'/'} buttonText={'Go back to mainpage'}/>

            }
        </Layout>
    </>
)}}

export default GetShirt