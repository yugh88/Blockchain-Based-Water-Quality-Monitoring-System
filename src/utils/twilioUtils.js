const twilio = require('twilio');

// Load environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = new twilio(accountSid, authToken);

// Function to send SMS alert
async function sendSmsAlert(message) {
  try {
    const response = await client.messages.create({
      body: message,
      to: process.env.RECIPIENT_PHONE_NUMBER, // The recipient's phone number
      from: twilioPhoneNumber
    });
    console.log('SMS alert sent:', response.sid);
  } catch (error) {
    console.error('Error sending SMS alert:', error);
  }
}

module.exports = { sendSmsAlert };