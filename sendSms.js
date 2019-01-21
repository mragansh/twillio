// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC53295456c7680671587990cfa89adb37';
const authToken = 'd330b74f1ebf846dbd0b601f9e0107b2';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Check MSG.',
     from: '+15155172004',
     to: '+15155172004'
   })
  .then(message => console.log(message.sid))
  .done();
