const sgMail = require("@sendgrid/mail")
const sendgridAPIKey = ""

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'test@mail.com',
        subject: 'Welcome to mail.com',
        text: `hi ${name}, great to have you as our customer`
    })
}
module.exports= {
    sendWelcomeEmail
}

// sgMail.send({
//     to: '@mail.com',
//     from: '@gmail.com',
//     subject: 'testing',
//     text: 'testing sendGrid'

// })