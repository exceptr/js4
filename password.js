function getPasswordChecker(password) {
    return function(pas) {
       if (pas === password) {
        return true
        }
        else {
            return false
       }
    }
}

const pas1 = getPasswordChecker("qwerty")
console.log(pas1("123"))