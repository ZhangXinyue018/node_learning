'use strict';

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: '***',
    port: 25
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"NoReply ?" <no-reply@ibm.com>', // sender address
    to: 'Xinyue.Zhang@ibm.com', // list of receivers
    subject: 'Test ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});