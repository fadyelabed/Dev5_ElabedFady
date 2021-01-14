const {v1: uuidv1 } = require('uuid');

const Helpers = {
  generateUUID: () => {
     const uuid = uuidv1();
     return uuid;
  },
  limitToTen: (InputArray) => {
    if(typeof InputArray == 'object') {
      return InputArray.slice(0,10)
    }
    return
  },


  lengthCheck: (inputString) => {
    if(typeof inputString == 'string') {
      if(inputString.length <= 100) {
        if(/^[A-Z]/.test(inputString)){
          return true
        }
      }
    } 
    return false
  },
}

module.exports = Helpers