var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madms2003@gmail.com',
    pass: 'ahmadms123'
  }
});

var mailOptions = {
  from: 'madms2003@gmail.com',
  to: 'ahmadmuhtadin20@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});