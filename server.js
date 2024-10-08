import dotenv from 'dotenv';
dotenv.config({ path: './sendgrid.env' });

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
  res.send('Welcome to the Hackathon Registration API');
});

app.post('/send-email', (req, res) => {
  const { username, email, firstName, lastName } = req.body;

  const msg = {
    to: 'jowen22@murraystate.edu',
    from: 'your-email@example.com',
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
