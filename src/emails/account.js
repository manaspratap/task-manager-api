const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "manaspratap@outlook.com",
    subject: "Welcome to the app!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "manaspratap@outlook.com",
    subject: "Good bye!",
    text: `Good bye, ${name}. Let me know if I could have done anything better to keep you as a customer.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
