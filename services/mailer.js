/* eslint-disable no-console */
/* eslint-disable prefer-template */
const nodemailer = require('nodemailer');

module.exports = {
  notifyOfEmail: (title, author, username, email, image, body) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.ADMINMAIL,
      subject: 'New Article Submission Request',
      text: 'New Article Submission Request',
      html: '<div>Title: ' + title + '<br>Author: ' + author + '<br>Username: ' + username + '<br>Email: ' + email + '<br>Image Src: ' + image + '<br>Body: ' + body + '</div>',
    };
    transporter.sendMail(mailOptions, (err) => {
      if (err) console.log(err);
      else console.log(title);
    });
  },
};
