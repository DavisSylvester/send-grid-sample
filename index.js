const dotenv = require('dotenv');
dotenv.config();


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: process.env.TO, // Change to your recipient
  from: process.env.SENDER, // Change to your verified sender
  subject: 'SAMPLE SENDING EXAMPLE WITH SEND GRID',
  text: 'This is just a reminder',
  html: '<strong><a href="https://github.com/DavisSylvester/send-grid-sample">GIT REPO</a></strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(JSON.stringify(error))
  })