const crypto = require('crypto');
const { generateFromEmail, generateUsername } = require("unique-username-generator");

function getRandomBytes(size) {
  return new Promise((res, rej) => {
    crypto.randomBytes(size, (err, buf) => {
      if (err) return rej(err);
      return res(buf);
    })
  })
}

function getValidUserName(username, email) {
  const usernameRegex = /^[a-z0-9_.]+$/
  return (usernameRegex.test(username) ? username : generateFromEmail(email)) || generateUsername();
}

module.exports = {
  getRandomBytes,
  isUserNameValid
};
