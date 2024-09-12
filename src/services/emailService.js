const nodemailer = require('nodemailer')
const mailGen = require('mailgen')

const mailGenerator = new mailGen({
    theme: 'default',
    product: {
        name: 'PingMyFam',
        link: 'https://mailgen.js/'
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
    }
})

const email = {
  body: {
    name: 'Hey new family member',
    intro: 'Your account has been generated, below are your login credentials',
    action: {
      instructions: 'To login, please click here:',
      button: {
        color: '#22BC66', 
        text: 'Login into your account',
        link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
      }
    },
    outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
  }
}

const emailBody = mailGenerator.generate(email)

const transporter = nodemailer.createTransport({
  service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

const sendMail = async () => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'etimdnl@gmail.com',
    subject: 'Login credentials',
    html: emailBody,
  },
    (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    }
  )
}


module.exports = sendMail