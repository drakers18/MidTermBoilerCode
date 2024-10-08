import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(cors());
app.use(bodyParser.json());

//API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//endpoint
app.post('/send-email', (req, res) => {
  const { username, email, firstName, lastName } = req.body;

  const msg = {
    to: 'jowen22@murraystate.edu', 
    from: 'drakers@murraystate.edu', 
    subject: 'New Hackathon Registration',
    text: `Username: ${username}\nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}`,
    html: `<strong>Username:</strong> ${username}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>First Name:</strong> ${firstName}<br>
           <strong>Last Name:</strong> ${lastName}<br>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    });
});

//start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
