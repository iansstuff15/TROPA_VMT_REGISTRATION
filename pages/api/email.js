// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY) 
const nodemailer = require('nodemailer');


export default async function handler(req, res) {
  
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const month = tomorrow.toLocaleString('default', { month: 'long' });
  const year = tomorrow.getFullYear()
  const day = tomorrow.getDate()
const body = JSON.parse(req.body);



const transporter = nodemailer.createTransport(
  {
    service:'gmail',
    auth:{
      user:process.env.CLIENT_EMAIL,
      pass:process.env.CLIENT_PASSWORD,
    }, 
    
    port:587,
  

  }
)
const options = {
  from: 'tropa.volunteer.management@gmail.com',
  to:body.email,
  subject: 'Mabuhay Kakampink!',
 html:  `<!DOCTYPE html>
 <html style="margin: 0;padding: 0;border: 0;">
     <head style="margin: 0;padding: 0;border: 0;">
         <meta charset="utf-8" style="margin: 0;padding: 0;border: 0;">
         <meta http-equiv="X-UA-Compatible" content="IE=edge" style="margin: 0;padding: 0;border: 0;">
         <title style="margin: 0;padding: 0;border: 0;"></title>
         <meta name="description" content="" style="margin: 0;padding: 0;border: 0;">
         <meta name="viewport" content="width=device-width, initial-scale=1" style="margin: 0;padding: 0;border: 0;">
         
     </head>
     
    
    
     <body style="margin: 0 auto;padding: 4%;border: 0;background-color: #fc368c;font-size: 1em;max-width: 800px;">
         <div class="email" style="margin: 0;padding: 0 9% 10% 9%;border: 0;background-color: white;border-radius: 15px;overflow: hidden;">
    
         <div style="margin: 0;padding: 0;border: 0;">
           
            <img src="https://i.ibb.co/1Rkw4G7/Whats-App-Image-2022-03-27-at-1-22-30-AM.jpg" alt="hero" class="hero" style="margin: 0;padding: 0;border: 0;width: 100%;border-radius: 25px;margin-top: 40px;">
         
         <h1 class="greetings" style="margin: 0;padding: 0;border: 0;color: black;margin-top: 30px;">Good Day!</h1>
         <h1 style="margin: 0;padding: 0;border: 0;"> 🌷Kakampink!🌷</h1>
         <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;">
             On behalf of the Solid Leni Pilipinas, we would like to thank you for volunteering your time and effort to be part of our growing Kakampink Community. We love and appreciate that you put your own time aside to help us.  This is not for money, it’s not for fame and it’s not for any personal gain.
         </p>
             <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;">It was possible only with the assistance of volunteers like you that we have been capable to take-up services in society.</p>
 
 <br style="margin: 0;padding: 0;border: 0;">
 
     
             <div class="bottom-container" style="margin: 0;padding: 0;border: 0;display: flex;">    
             <a href="https://www.facebook.com/solidlenipilipinas" target="_blank" class="FB" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #e3e3e3;color: black;border-radius: 10px;text-align: center;display: inline-block;height: 100%;float: right;margin-top: 10px;margin-right: 20px;">FACEBOOK PAGE</a>
             <a href="https://twitter.com/pilipinasleni?s=11&t=ZVGoR4vLV1ZxrohxLE7b4w" target="_blank" class="FB" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #e3e3e3;color: black;border-radius: 10px;text-align: center;display: inline-block;height: 100%;float: right;margin-top: 10px;margin-right: 20px;">TWITTER PAGE</a>
             <p class="FB" style="margin: 50px 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;background-color: #e3e3e3;text-decoration: none;color: black;border-radius: 10px;text-align: center;display: inline-block;height: 100%;float: right;margin-top: 10px;margin-right: 20px;">EMAIL: tropa.volunteer.management@gmail.com</p>
             </div>
 
         <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;"><strong style="margin: 0;padding: 0;border: 0;">Always remember “Sa Gobyernong tapat, angat buhay ang lahat.”  </strong></p>
         <p class="position" style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;color: #fc368c;"><strong style="margin: 0;padding: 0;border: 0;">Tayo ang SOLID LENI Pilipinas!</strong></p>
     
     </div>
     </div></body>
 
 </html>`,
}


await new Promise((resolve, reject) => {
  // verify connection configuration
  transporter.verify(function (error, success) {
      if (error) {
   
          reject(error);
      } else {
        
          resolve(success);
      }
  });
});



await new Promise((resolve, reject) => {

  // send mail
  transporter.sendMail(options, (err, info) => {
      if (err) {
          console.error(err);
          reject(err);
      } else {
 
          resolve(info);
      }
  });})

    res.status(200).json({ status:'success' })
  }
  