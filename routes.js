const routes = require('next-routes')();

routes
  .add('/', 'index')  // Home page (index.js)
  .add('/home', 'home')  // Home page (home.js)
  .add('/device', 'device')  // Device page (device.js)
  .add('/iot', 'iot')  // IoT page (iot.js)
  .add('/regulator', 'regulator')  // Regulator page (regulator.js)
  .add('/tokentransferindustry', 'tokentransferindustry')  // Token Transfer Industry page (tokentransferindustry.js)
  .add('/tokentransferregulator', 'tokentransferregulator');  // Token Transfer Regulator page (tokentransferregulator.js)

module.exports = routes;