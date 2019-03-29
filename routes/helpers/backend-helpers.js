/* eslint-disable consistent-return */
/* eslint-disable no-console */
const User = require('../../models/User');

const userNameExists = (username) => {
  User.findOne({
    username,
  }, (err) => {
    if (err) console.log(err);
    else {
      return true;
    }
  });
};

module.exports = userNameExists;
