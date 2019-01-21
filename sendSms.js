
const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Check MSG.',
     from: '+15155172004',
     to: '+15155172004'
   })
  .then(message => console.log(message.sid))
  .done();
