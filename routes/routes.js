const path = require('path');
const convertTime = require('../js/app');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/:timestamp', function(req, res) {
    const timestamp = req.params.timestamp;
    // convertTime(timestamp);
    res.json(convertTime(timestamp));
  });
};
