// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis"
const nodemailer = require('nodemailer');
export default async function handler(req, res) {
    const now = new Date();

    const body = JSON.parse(req.body);
    const auth = new google.auth.GoogleAuth({
     
        credentials: {
            "type": "service_account",
            "project_id": "volunteermanagementteam",
            "private_key_id": "2f54d9de0a5c43fe286348de05566553ee578968",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCkz6/c5tSu1kIv\nHw7r/BZ+GAoWKQEOqaggwR5DHEW+y8ZFPNmTvZl4HMBe6oI3wDeQlxwAyAzFKO9E\nFiSzYJNoEA50unHYzQcm1lEhzYZk/unwhiUOjRP42RX77msSNG6vAlwfkgZmZtKp\n868vSD7Rs2mEC08gyvG9xZA1Fb5cy40SuJo1X9Ml+LmxN5Krcl0cw775+HC3TMkd\nraiZkRDhRe4VYj9kIL48qYo+/mzx7eSPJWCuU0vIKF5TMvFaOSmr14+rpBm5TYM4\nA/RZtlxMxSLshM3u3CgNDnnHci8098Zs6S3lt5XPPlqTA66rb/hV0AsxX9/gEfRo\nwAvcJmPtAgMBAAECggEAE76r/4eKCG4z3KhYZc48NZwUrUX5UfPiaBYq1XhwJKUO\nGmJpYKlQ1xJ+u4BV3G8DWSe5W6Cb4wz96UbL28+gqVFvIe3qUMJzbmQzsRyJ0tS1\nWzL/AojFUUVUvGt6WWJ9tirOtZuNd7wu1dyTatM5b28Sn5apQrD9mDIwjiOOPFiX\nIpfQqqiH1gwcA/hNwTTKjvbZ9cGbtuS7MjGwSmq4lLwa/Q8NO9az2PdRRm//T68u\nRyefHHXRb4OEv+M0rRoimwyUWkKESMy73ux5c/Oto96V+kCzhR3c1cun/sCouFhG\n+i1HhDNB35oyr7ocK1zFk5nrzVVchSuOmj1k/ta9EwKBgQDgoD+IK2r8I5/OxVHh\n48Gm+FZxgvgQmqTMbDtwvd0151qg6WwfmxDOQX6SM4rzQ1nJqQ5shQxo10jgb1N3\nheCo+VXFL2QNkGOPeGaiZwr4bEB6o7xWzEnfp71D5tkFJ0JuChUZvDJL3GaC1j+5\nqBNkfUfXt4/3OEInruuKVA77awKBgQC71LKkkVOwTeEPC6TyDi5pj4Fn/FaeA06x\n2ashkbA0Iv7j0aCXUdwOcfnXXbBbhCShBpmxK85dWLCIGT/KKKLq2pr7USJPYamm\nKMFR/84cmbVkECiC8a8GoDgHnQ0w3i+zw4LJoJYHfMb59YFU5/FKv8CLy4xSq5+/\nO+R5kX2MBwKBgD5KchPS5oIxZtmyQni/7i3dZCtqRFxmZhkCUqF7JWMTW0CQOpmx\nKMHpy63DeV7oaHfR19wkMULJoL4MYTsd9yUkr7JU6AwS5Gke3Gdg59voOSFJUqtH\nT50kKQoxdDFHp9ZYGW3fkJsU7aCOxXE4uNf/HfMmRlgqU74pdcwQb28tAoGBAKxC\nfTOANIhUZDswKq3zY41cFwoO2kFAN0PUpKW8vySRk8HL1sPwRyjYTpG9UqgboJwt\nOXbK/g+N7xhiT6ZPblqE8e3akuTKZJQGfIV/XL/OGBUU3JJ6pFInTjttRVOz8Xuj\nqqbPp8hmHvXOujXsIdaz1RpgKukGjRMNEpSLYeCxAoGBANww4Jo+2b0Xq+91Nd/Q\nGSP25Wfs3rzXIlPQb2jjWT9HZzQ1NMTTL83VJ4xiS1eHxow69V/k4TtC7g4C4s//\nWUx17Xt172N8BaSREbMzbgDzdwFii05wzLMb2IYF/wehE+G+1++s07Q2NvO4nD70\nuCTYmL0kWn55UAcAbUcLJtRo\n-----END PRIVATE KEY-----\n",
            "client_email": "volunteermanagementteam@volunteermanagementteam.iam.gserviceaccount.com",
            "client_id": "107328742741158324241",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/volunteermanagementteam%40volunteermanagementteam.iam.gserviceaccount.com"
        },
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    

    });
    const client = await auth.getClient();

    const googleSheets = google.sheets({version:'v4', auth: client});
  const  spreadsheetId = process.env.SHEETS_ID;
   await googleSheets.spreadsheets.values.append({
       auth,
       spreadsheetId,
       range:'Shirt_Orders!A2',
       valueInputOption: 'USER_ENTERED',
       resource: {
           values:[[
           body.RID, body.firstName,body.lastName,body.email,body.phone,body.mode,body.color, now, now, body.RefNum, body.quantity, body.size
            ]]
       }
   })





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
     
    
    
     <body style="margin: 0 auto;padding: 4%;border: 0;background-color: #ffd7ea;background-image: url(https://i.ibb.co/1Rkw4G7/Whats-App-Image-2022-03-27-at-1-22-30-AM.jpg);background-repeat: no-repeat;background-size: cover;height: 100%;background-blend-mode: luminosity;font-size: 1em;max-width: 800px;">
         <div class="email" style="margin: 0;padding: 0 9% 10% 9%;border: 0;background-color: white;border-radius: 15px;overflow: hidden;">
    
         <div style="margin: 0;padding: 0;border: 0;">
         <div style="margin: 0;padding: 0;border: 0;">
             <img src="https://i.ibb.co/9rTrMZM/logo.png" alt="logo" class="logo" style="margin: 0;padding: 0;border: 0;max-width: 120px;margin-top: 20px;">
             <span class="RID" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #008F8D;color: white;margin-bottom: 10px;border-radius: 10px;word-break: break-all;width: 40%;display: inline-flex;margin-top: 20px;float: right;">   RID: ${body.RID}</span> 
         </div>
        
         <h1 class="greetings" style="margin: 0;padding: 0;border: 0;color: black;margin-top: 30px;">Mabuhay </h1>
         <h1 style="margin: 0;padding: 0;border: 0; color:#fc368c;">Kakampink! 🌺</h1>
         <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;">
             Maraming salamat sa inyong contribution para sa TRoPa campaign! Makakaasa kayo na ang bawat ambag ay isang hakbang palapit sa Bukas na Kulay Rosas. 
         </p>
         
             <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;">Ito po ang magsisilbi bilang Official Acknowledgement ng inyong order: 
             </p>
           
          
             <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"><strong style="margin: 0;padding: 0;border: 0;">Color: </strong> ${body.color} </span>
             <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"><strong style="margin: 0;padding: 0;border: 0;">Size: </strong> ${body.size} </span>
              <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"> <strong style="margin: 0;padding: 0;border: 0;">Quantity: </strong> ${body.quantity}</span> <br style="margin: 0;padding: 0;border: 0;">
             <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"><strong style="margin: 0;padding: 0;border: 0;">Name: </strong> ${body.lastName+ ', '+ body.firstName} </span> <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"> <strong style="margin: 0;padding: 0;border: 0;">Date Received: </strong> ${now}</span> <br style="margin: 0;padding: 0;border: 0;">
             <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"><strong style="margin: 0;padding: 0;border: 0;">Distribution Date & Time: </strong> starts on May 2, 2022 from 8:00 A.M. to 7:00 P.M. </span> <span class="grey_highlight" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;margin-bottom: 10px;border-radius: 10px;text-align: center;display: inline-flex;margin-right: 10px;"> <strong style="margin: 0;padding: 0;border: 0;">Distribution Place: </strong> 19 Lasalle St., Brgy Silangan Cubao, QC</span> <br style="margin: 0;padding: 0;border: 0;">
             <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;"></p>
             <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;"></p>
             <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;"></p>
             <p style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;">Makakaasa kayo ng update sa amin sa susunod na mga linggo kung saan napunta ang inyong contributions. Muli, maraming salamat, Kakampink! 
             </p>
 
 

             <br style="margin: 0;padding: 0;border: 0;">
             <a href="https://www.facebook.com/solidlenipilipinas" target="_blank" class="FB" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;color: black;border-radius: 10px;text-align: center;margin-top: 40px;margin-right: 10px;">Facebook Page</a>
             <a href="https://twitter.com/SolidTropaVMT" target="_blank" class="FB" style="margin: 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-decoration: none;background-color: #EDEDED;color: black;border-radius: 10px;text-align: center;margin-top: 40px;margin-right: 10px;">Twitter Page</a><br style="margin: 0;padding: 0;border: 0;">
             <p class="FB" style="margin: 40px 0;padding: 20px;border: 0;font-weight: bolder;font-family: 'Raleway', sans-serif;text-align: center;background-color: #EDEDED;text-decoration: none;color: black;border-radius: 10px;margin-top: 40px;margin-right: 10px;">EMAIL: tropa.volunteer.management@gmail.com</p>
     
 
    
         <p class="position" style="margin: 40px 0;padding: 0;border: 0;font-weight: normal;font-family: 'Raleway', sans-serif;text-align: justify;background-color: white;text-decoration: none;color: #fc368c;"> <strong style="margin: 0;padding: 0;border: 0;">Solid Leni Pilipinas-Volunteers Management Team
 </strong></p>
     
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

    res.status(200).json({ name: 'John Doe' })
  }
  