var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: 'USERNAME',
		pass: 'PASSWORD'
	}
});

var mailOptions = {
	from:'USERNAME',
	to : 'SOMEONES EMAIL',
	subject: 'Sending Email using Node.js',
	text: 'TEXT'
};

transporter.sendMail(mailOptions, function(err,info){
	if(err){
		console.log(err);
	}else {
		console.log('Email sent to : ' + info.response);
	}
});


