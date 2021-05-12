// validates user password and email (one must be the reverse of the other)
const validateUserCredential = (userCredentials) => {
  var userName = userCredentials.username;
  var userPassword = userCredentials.password;
  if (userName.length == userPassword.length) {
    var textLength = userName.length;
    for (var i = 0; i < textLength; i++) {
      if (userName[i] != userPassword[(textLength - 1) - i]) {
        return false;
      }   
    }
    return true;
  }
  return false;
}

module.exports = validateUserCredential;