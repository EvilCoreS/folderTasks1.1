const validator = {
    validateEmail: function (strEmail){
        let regexp = /(^[a-z0-9][a-z0-9\-+.]{1,20})@([a-z0-9.!$%&’*+\/=?^_\-][a-z0-9.!$%&’*+\/=?^_\-]{0,15})\.([a-z]{0,5}$)/
        if (regexp.test(strEmail)){
            return true;
        }
    },

    validatePhone: function (strPhone){
        let regexp = /^(\+?[\-38\s]+)?(\(?[0-9\-?]+\)?)([\s0-9][\s\-0-9]+)$/
        let checkLength = strPhone.match(/\d/g).join('').length
        if (regexp.test(strPhone) && checkLength <= 12){
            return true;
        }
    },

    validatePassword: function (strPassword){
        let regexp = /[a-zA-Z0-9_]{8,}/
        let checkNumber = 0, checkUpLetter = 0, checkLowLetter = 0
        for(let i = 0; i < strPassword.length; i++){
            for (let k = 0; k < 26; k++) {
                if (String.fromCharCode(65 + k) == strPassword[i]) {
                    checkUpLetter++
                    break;
                }
            }
            if (checkUpLetter != 0){
                break
            }
        }
        for(let i = 0; i < strPassword.length; i++){
            for (let k = 0; k < 26; k++){
                if (String.fromCharCode(97 + k) == strPassword[i]){
                    checkLowLetter++
                    break;
                }
            }
            if (checkLowLetter != 0){
                break
            }
        }
        for(let i = 0; i < strPassword.length; i++){
            for (let k = 0; k < 10; k++){
                if (k == strPassword[i]){
                    checkNumber++
                    break;
                }
            }
            if (checkNumber != 0){
                break
            }
        }
        let check = (checkUpLetter + checkNumber + checkLowLetter)
        if (regexp.test(strPassword) && check == 3){
            return true;
        }
    }
}
let validPhone, validEmail, validPassword, invalidPhone, invalidEmail, invalidPassword
validEmail = ["fi@secondpart.end", "first-part@.se=cond%p.art.end", "first.part@se=cond%part.r"]
validPhone = ["+38 (099) 567 8901", "+38 099 5 6 7 8 9  01", "(09-9) 567-890-1", "--  (099) 567 890-1"]
validPassword = ["C00l_Pass", "SupperPas1"]
invalidPhone = ["+38 (099) 567 8901 0", "+38 099 a0000000", "+38 (0989) 567 8901", "+48 (0989) 567 8901"]
invalidEmail = ["f@secondart.end,", "first-part@.se=cond@part.end", "-firstpart@.se=cond%.enddeded", "firs_tpart@.se.en", "firstpart@.se.enddeded"]
invalidPassword = ["Cool_pass", "C00l"]
function checkPhone(phoneArray){
    for (let i = 0; i < phoneArray.length; i++){
        console.log(phoneArray[i] + ": " + validator.validatePhone(phoneArray[i]))
    }
}
function checkEmail(emailArray){
    for (let i = 0; i < emailArray.length; i++){
        console.log(emailArray[i] + ": " + validator.validateEmail(emailArray[i]))
    }
}
function checkPassword(passwordArray){
    for (let i = 0; i < passwordArray.length; i++){
        console.log(passwordArray[i] + ": " + validator.validatePassword(passwordArray[i]))
    }
}
checkPhone(validPhone)
checkPhone(invalidPhone)
checkEmail(validEmail)
checkEmail(invalidEmail)
checkPassword(validPassword)
checkPassword(invalidPassword)