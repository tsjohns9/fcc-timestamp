const moment = require('moment');

module.exports = function(timestamp) {
  const checkUnix = /^\d+$/;

  if (checkUnix.test(timestamp)) {
    return {
      Unix: timestamp,
      Natural: moment.unix(timestamp).format('MMMM DD, YYYY')
    };
  } else {
    return {
      Unix: moment(timestamp).unix(),
      Natural: moment(timestamp).format('MMMM DD, YYYY')
    };
  }
};
