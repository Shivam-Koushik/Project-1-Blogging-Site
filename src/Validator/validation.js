const mongoose = require('mongoose');

const isValidObjectId = function(x){
  return  mongoose.Types.ObjectId.isValid(x); 
}


// const isValid = function (value) {
//     if (typeof value === "undefined" || value === null) return false
//     if (typeof value === "string" && value.trim().length === 0) return false
//     if (typeof value === Number && value.trim().length === 0) return false
//     return true
// }


const isValid = function (x) {
    let strRegex = /^\w[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
    if (typeof x === 'undefined' || x === null) return false
    if( typeof x != "string")  return false
    if (typeof x === 'string' && x.trim().length === 0) return false
    if(!strRegex.test(x)) return false
    return true
}

const isValidBody = function (y) {
    return Object.keys(y).length > 0
}

const isValidEmail = function (y) {
   
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(y) ) return true
}

const isValidMobile = function (y) {   
   let mobileRegex = /^([+]\d{2})?\d{10}$/
   if (mobileRegex.test(y)) return true
}

const isValidPassword = function (y) {   
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]*).{8,15}$/
   if (passwordRegex.test(y)) return true
}

const isValidDate = function (y) {   
    let dateRegex = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/
   if (dateRegex.test(y)) return true
}

module.exports.isValidObjectId = isValidObjectId
module.exports.isValidBody = isValidBody
module.exports.isValid = isValid
module.exports.isValidEmail = isValidEmail
module.exports.isValidMobile = isValidMobile
module.exports.isValidPassword = isValidPassword
module.exports.isValidDate = isValidDate