const sgMail = require('@sendgrid/mail');

// Load environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Function to send email alert
async function sendEmailAlert(subject, message) {
  const msg = {
    to: process.env.RECIPIENT_EMAIL, // The recipient's email
    from: process.env.SENDER_EMAIL,  // The sender's email
    subject: subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    console.log('Email alert sent');
  } catch (error) {
    console.error('Error sending email alert:', error);
  }
}

module.exports = { sendEmailAlert };