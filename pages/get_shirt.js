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
            black_angatleta_total: [],
            white_angatleta_total: [],
            black_OnePinkFight_total: [],
            white_OnePinkFight_total: [],
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
        if(event.target.id!=''){
            await this.setState({ color: event.target.id });
        }
      
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
            <h2 className={styles.subtext}>ANGATLETA SHIRT!</h2>
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
    <Image src={this.state.shirt == 'front'?  this.state.black_front:this.state.black_back} quality={100} width={700} height={900} objectFit='cover' className={styles.shirt_image}/>
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
    <Image src={this.state.shirt == 'front'?  this.state.white_front:this.state.white_back} quality={100}  width={700} height={900}  objectFit='cover' className={styles.shirt_image}/>
    </div>
    
    <Image src={this.state.white_front} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
    <Image src={this.state.white_back} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="back" onClick={this.handleImageSwitch}/>
    </div>
  
    <br/>
</div>:
null
  }
  {    
//   this.state.color =='Black_OnePinkFight'?
// <div>
// <div>
//     <div>
//     <Image src={this.state.shirt == 'front'?  this.state.black_one_pink_fight:this.state.black_back} quality={100}  width={700} height={900}  objectFit='cover' className={styles.shirt_image}/>
//     </div>
    
//     <Image src={this.state.black_one_pink_fight} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="front" onClick={this.handleImageSwitch}/>
//     {/* <Image src={this.state.black_back} width={100} height={150} objectFit='cover' className={styles.shirt_image} id="back" onClick={this.handleImageSwitch}/> */}
//     </div>
  
//     <br/>
// </div>:
// null
  }
  {    this.state.color =='Black_OnePinkFight'?
<div>
<div>
    <div>
    <Image src={this.state.shirt == 'front'?  this.state.black_v2_one_pink_fight:this.state.black_back} quality={100}  width={700} height={900} objectFit='cover' className={styles.shirt_image}/>
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
    <Image src={this.state.shirt == 'front'?  this.state.white_one_pink_fight:this.state.black_back} quality={100}  width={700} height={900} objectFit='cover' className={styles.shirt_image}/>
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

        <strong className={this.state.color == 'Black_Angatleta'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black_Angatleta" onClick={this.handleColorSwitch}><div><Image id="Black_Angatleta"  src={'https://i.ibb.co/KxzPmJf/black-angatleta.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black_Angatleta" >AngatLeta</strong></strong>
        <strong className={this.state.color == 'White_Angatleta'?  styles.color_picker_selected:styles.color_picker_unselected} id="White_Angatleta" onClick={this.handleColorSwitch}> <div><Image   id="White_Angatleta" src={'https://i.ibb.co/y4szrFX/white-angatleta.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong  id="White_Angatleta" >AngatLeta</strong></strong>
        {/* <strong className={this.state.color == 'Black_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="Black_OnePinkFight" src={'https://i.ibb.co/zGMMh4C/black-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black_OnePinkFight" >One Pink Fight</strong></strong> */}
        <strong className={this.state.color == 'Black_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="Black_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="Black_OnePinkFight" src={'https://i.ibb.co/dr3z2Gh/black-v2-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="Black_OnePinkFight" >One Pink Fight</strong></strong>
        <strong className={this.state.color == 'White_OnePinkFight'?  styles.color_picker_selected:styles.color_picker_unselected} id="White_OnePinkFight" onClick={this.handleColorSwitch}> <div><Image id="White_OnePinkFight" src={'https://i.ibb.co/qWb5ynt/white-one-pink-fight.png'} width={'100'} height={20} objectFit="cover" className={styles.chip}/></div> <strong id="White_OnePinkFight">One Pink Fight</strong></strong>
    </div>
    
    </div>
    {/* <h3>Material</h3>
    <p>Polyester</p> */}
    <h3>Sizes</h3>
    {

        this.state.color=="Black_OnePinkFight"  ?
        <>
{ parseInt(this.state.black_OnePinkFight_total[0])  >= 100 ? null:<strong className={this.state.size == 'XS'?  styles.color_picker_selected:styles.color_picker_unselected} id="XS" onClick={this.handleSizeSwitch}>XS</strong>

}
{parseInt(this.state.black_OnePinkFight_total[0])  >= 100 ? null:<strong className={this.state.size == 'S'?  styles.color_picker_selected:styles.color_picker_unselected} id="S" onClick={this.handleSizeSwitch}>S</strong>

}
{parseInt(this.state.black_OnePinkFight_total[1])  >= 200  ? null:<strong className={this.state.size == 'M'?  styles.color_picker_selected:styles.color_picker_unselected} id="M" onClick={this.handleSizeSwitch}>M</strong>

}
{parseInt(this.state.black_OnePinkFight_total[2])  >= 100? null:<strong className={this.state.size == 'L'?  styles.color_picker_selected:styles.color_picker_unselected} id="L" onClick={this.handleSizeSwitch}>L</strong>

}
{parseInt(this.state.black_OnePinkFight_total[3])  >= 100? null:<strong className={this.state.size == 'XL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XL" onClick={this.handleSizeSwitch}>XL</strong>

}

{parseInt(this.state.black_OnePinkFight_total[3])  >= 100 ? null:<strong className={this.state.size == 'XXL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XXL" onClick={this.handleSizeSwitch}>XXL</strong>

}
        </>
        :
        null
    }


{

 this.state.color=="White_OnePinkFight" ?
<>
{ parseInt(this.state.white_OnePinkFight_total[0])  >= 100 ? null:<strong className={this.state.size == 'XS'?  styles.color_picker_selected:styles.color_picker_unselected} id="XS" onClick={this.handleSizeSwitch}>XS</strong>

}
{parseInt(this.state.white_OnePinkFight_total[0])  >= 100 ? null:<strong className={this.state.size == 'S'?  styles.color_picker_selected:styles.color_picker_unselected} id="S" onClick={this.handleSizeSwitch}>S</strong>

}
{parseInt(this.state.white_OnePinkFight_total[1])  >= 200  ? null:<strong className={this.state.size == 'M'?  styles.color_picker_selected:styles.color_picker_unselected} id="M" onClick={this.handleSizeSwitch}>M</strong>

}
{parseInt(this.state.white_OnePinkFight_total[2])  >= 100 ? null:<strong className={this.state.size == 'L'?  styles.color_picker_selected:styles.color_picker_unselected} id="L" onClick={this.handleSizeSwitch}>L</strong>

}
{parseInt(this.state.white_OnePinkFight_total[3])  >= 100 ? null:<strong className={this.state.size == 'XL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XL" onClick={this.handleSizeSwitch}>XL</strong>

}

{parseInt(this.state.white_OnePinkFight_total[3])  >= 100 ? null:<strong className={this.state.size == 'XXL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XXL" onClick={this.handleSizeSwitch}>XXL</strong>

}
</>
:
null
}    
       {

this.state.color=="Black_Angatleta"  ?
<> 
{parseInt(this.state.black_angatleta_total[0])  >= 200  ? null:<strong className={this.state.size == 'XS'?  styles.color_picker_selected:styles.color_picker_unselected} id="XS" onClick={this.handleSizeSwitch}>XS</strong>

}
{parseInt(this.state.black_angatleta_total[0])  >= 200  ? null:<strong className={this.state.size == 'S'?  styles.color_picker_selected:styles.color_picker_unselected} id="S" onClick={this.handleSizeSwitch}>S</strong>

}
{parseInt(this.state.black_angatleta_total[1])  >= 300  ? null:<strong className={this.state.size == 'M'?  styles.color_picker_selected:styles.color_picker_unselected} id="M" onClick={this.handleSizeSwitch}>M</strong>

}
{parseInt(this.state.black_angatleta_total[2])  >= 250  ? null:<strong className={this.state.size == 'L'?  styles.color_picker_selected:styles.color_picker_unselected} id="L" onClick={this.handleSizeSwitch}>L</strong>

}
{parseInt(this.state.black_angatleta_total[3])  >= 250 ? null:<strong className={this.state.size == 'XL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XL" onClick={this.handleSizeSwitch}>XL</strong>

}

{parseInt(this.state.black_angatleta_total[3])  >= 250 ? null:<strong className={this.state.size == 'XXL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XXL" onClick={this.handleSizeSwitch}>XXL</strong>

}




</>
:
null
}
{

  this.state.color=="White_Angatleta" ?
<> 
{parseInt(this.state.white_angatleta_total[0])  >= 200  ? null:<strong className={this.state.size == 'XS'?  styles.color_picker_selected:styles.color_picker_unselected} id="XS" onClick={this.handleSizeSwitch}>XS</strong>

}
{parseInt(this.state.white_angatleta_total[0])  >= 200  ? null:<strong className={this.state.size == 'S'?  styles.color_picker_selected:styles.color_picker_unselected} id="S" onClick={this.handleSizeSwitch}>S</strong>

}
{parseInt(this.state.white_angatleta_total[1])  >= 300  ? null:<strong className={this.state.size == 'M'?  styles.color_picker_selected:styles.color_picker_unselected} id="M" onClick={this.handleSizeSwitch}>M</strong>

}
{parseInt(this.state.white_angatleta_total[2])  >= 250  ? null:<strong className={this.state.size == 'L'?  styles.color_picker_selected:styles.color_picker_unselected} id="L" onClick={this.handleSizeSwitch}>L</strong>

}
{parseInt(this.state.white_angatleta_total[3])  >= 250 ? null:<strong className={this.state.size == 'XL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XL" onClick={this.handleSizeSwitch}>XL</strong>

}

{parseInt(this.state.white_angatleta_total[3])  >= 250 ? null:<strong className={this.state.size == 'XXL'?  styles.color_picker_selected:styles.color_picker_unselected} id="XXL" onClick={this.handleSizeSwitch}>XXL</strong>

}




</>
:
null
}

       
        <br/>
    <br/>
    <br/>
    <InputComponent name={'quantity'} type={'number'}  label={'Quantity'}required onChange={this.handleChange} id = {'quantity'} value = {this.quantity} min={1} max={5}/>
  <br/>
  <div className={styles.RID_container}>
        
        <p className={styles.price}><strong>Price: </strong> <br/>₱ {this.state.quantity==''? 299 : this.state.quantity * 299 }.00</p>
    
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

  

         <select name="mode" id="mode" value={this.mode} onChange={this.handleChange} className={styles.select}>
            <option value="Gcash" className={styles.option}>Gcash</option>
            <option value="BDO" className={styles.option}>BDO</option>
            <option value="BPI" className={styles.option}>BPI</option>
        </select>
     
        <InputComponent name={'referenceNumber'} type={'text'}  label={'Reference Number'} onChange={this.handleChange} id = {'RefNum'} value = {this.RefNum} required/>
       
       
        
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