var nodemailer = require('nodemailer');
var express = require('express')
var path = require('path')
var fs = require('fs')

module.exports = {
    notifyOfEmail: function(title, author, email, image, body) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.ADMINMAIL,
            subject: "New Article Submission Request",
            text: "New Article Submission Request",
            html: '<div>Title: '+title+'<br>Author: '+author+'<br>Email: '+email+'<br>Image Src: '+image+'<br>Body: '+body+'</div>'
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err)
                console.log(err)
            else
                console.log(title);
            });
    },
    welcomeUser: function(userEmail, name){

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            }
        });

    fs.readFile(path.join(__dirname,"..","/public/emails/newUser.html"),"utf8",(err,info)=>{

        let arr = info.split('#split#')
        arr[1] = name;
        let payload = arr.join('')

        let mailOptions = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: "Welcome to IssueTracker",
            text: "Welcome to Issue Tracker!",
            html: payload
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err)
            else
                console.log(payload);
            });
        });
    }
}