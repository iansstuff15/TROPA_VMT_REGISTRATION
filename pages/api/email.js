const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY) 



export default function handler(req, res) {
    
    const body = JSON.parse(req.body);
console.log(body.email+ 'body');
    const msg = {
        to: body.email, // Change to your recipient
        from: 'dlpowell35@gmail.com', // Change to your verified sender
        subject: 'Test Email',
        // text: 'Test Email Recieved',
        html: `<strong >Hi, ${body.firstName} you recieved a test email.</strong>`,
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
  