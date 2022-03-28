const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY) 



export default function handler(req, res) {
    
    const body = JSON.parse(req.body);
console.log(body.email+ 'body');
    const msg = {
        to: body.email, // Change to your recipient
        from: 'dlpowell35@gmail.com', // Change to your verified sender
        subject: 'Greetings Kakampink!',
        // text: 'Test Email Recieved',
        html: `<html style="margin: 0;padding: 0;border: 0;">
        <head style="margin: 0;padding: 0;border: 0;">
            <meta charset="utf-8" style="margin: 0;padding: 0;border: 0;">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" style="margin: 0;padding: 0;border: 0;">
            <title style="margin: 0;padding: 0;border: 0;"></title>
            <meta name="description" content="" style="margin: 0;padding: 0;border: 0;">
            <meta name="viewport" content="width=device-width, initial-scale=1" style="margin: 0;padding: 0;border: 0;">
            
        </head>
        
       
       
        <body style="margin: 0 auto;padding: 4%;border: 0;background-color: #fc368c;font-size: 19px;max-width: 800px;">
            <div class="email" style="margin: 0;padding: 0 9% 10% 9%;border: 0;background-color: white;border-radius: 15px;overflow: hidden;">
       
            <div style="margin: 0;padding: 0;border: 0;">
              
               <img src="https://i.ibb.co/1Rkw4G7/Whats-App-Image-2022-03-27-at-1-22-30-AM.jpg" alt="hero" class="hero" style="margin: 0;padding: 0;border: 0;width: 100%;border-radius: 25px;margin-top: 40px;">
            
            <h1 class="greetings" style="margin: 0;padding: 0;border: 0;color: black;margin-top: 30px;">Good Day!</h1>
            <h1 style="margin: 0;padding: 0;border: 0;"> 🌷Kakampink!🌷</h1>
            <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, numquam unde hic porro nesciunt quos velit eaque ullam natus repellat, explicabo sapiente debitis recusandae voluptate? Tempore necessitatibus quos at tenetur.
    </p><p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi deleniti placeat nemo corporis veritatis? Iusto id repellendus nobis nihil, laborum suscipit autem omnis. Dolores reprehenderit nisi similique libero ipsum molestias!
    </p>
    
        
        
                <div class="bottom-container" style="margin: 0;padding: 0;border: 0;display: flex;">    
                <a href="#" class="FB" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #e3e3e3;color: black;border-radius: 10px;text-align: center;display: inline-block;height: 100%;float: right;margin-top: 10px;margin-right: 20px;">FACEBOOK PAGE</a>
                <p class="FB" style="margin: 50px 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;background-color: #e3e3e3;text-decoration: none;color: black;border-radius: 10px;text-align: center;display: inline-block;height: 100%;float: right;margin-top: 10px;margin-right: 20px;">EMAIL: test@email.com</p>
                </div>
    
            <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;"><strong style="margin: 0;padding: 0;border: 0;">Regards,</strong></p>
            <p style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;">FirstName, LastName</p>
            <p class="position" style="margin: 50px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;background-color: white;text-decoration: none;color: #fc368c;"><strong style="margin: 0;padding: 0;border: 0;">Role</strong></p>
        
        </div>
        </div></body>
    
    </html>`,
      }
    sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

    res.status(200).json({ status:'success' ,key: process.env.SENDGRID_API_KEY })
  }
  