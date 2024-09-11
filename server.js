const express = require('express');
const next = require('next');
const Web3 = require('web3');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
require('dotenv').config(); // To load environment variables

// Import utilities for sending alerts
const { sendSmsAlert } = require('./src/utils/twilioUtils');
const { sendEmailAlert } = require('./src/utils/sendgridUtils');

// Initialize Next.js
const app = next({
  dev: process.env.NODE_ENV !== 'production'
});
const routes = require('./routes');
const handle = routes.getRequestHandler(app);

// Initialize Express
const server = express();
const port = process.env.PORT || 8001;

// Middleware
server.use(bodyParser.json());

// Next.js request handler
server.get('*', (req, res) => {
  return handle(req, res);
});

// Route for generating reports
server.get('/generate-report', (req, res) => {
  exec('npm run generate-report', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Error generating report');
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send('Report generated successfully');
  });
});

// Route for tampering detection and alerting
server.post('/detect-tampering', async (req, res) => {
  const { meterData } = req.body;

  // Simulate tampering detection logic
  const tamperingDetected = detectTampering(meterData); // Implement your own tampering logic here

  if (tamperingDetected) {
    const alertMessage = `Tampering detected in meter: ${meterData.meterId}. Please take immediate action.`;
    
    // Send SMS Alert
    try {
      await sendSmsAlert(alertMessage);
    } catch (err) {
      console.error('Error sending SMS alert:', err);
      return res.status(500).send('Error sending SMS alert.');
    }

    // Send Email Alert
    try {
      const emailSubject = 'Urgent: Tampering Detected';
      await sendEmailAlert(emailSubject, alertMessage);
    } catch (err) {
      console.error('Error sending Email alert:', err);
      return res.status(500).send('Error sending Email alert.');
    }

    return res.status(200).send('Tampering detected and alerts sent.');
  } else {
    return res.status(200).send('No tampering detected.');
  }
});

// Start the server
app.prepare().then(() => {
  // Configure Web3
  const truffle_connect = require('./connection/app.js');
  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

  server.listen(port, () => {
    console.log(`Express Listening at http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});

// Helper function for detecting tampering (you'll implement the actual logic)
function detectTampering(meterData) {
  // Replace with your tampering detection logic.
  // For demonstration, we'll return true if water usage is unusually high.
  // Example threshold for unusual water usage
  if (meterData.usage > 1000) { 
    return true;
  }
  return false;
}