// property creation of varibale in the class hierarchy. variable inside the class hierarchy
// method is function creation of class hierarchy. function creation of class hierarchy
//


class user{
    firstName
    lastName
    phoneNumber
    password
    validateFromNmae(firstName){
        const pattern = new RegExp ([a-z])
        return pattern.test(firstName)
    }
    validateFromNmae(lastName){
        const pattern = new RegExp ([a-z])
        return pattern.test(lastName)
    }
    validateFromNmae(phoneNumber){
        const pattern = new RegExp (/[6-9]{1}[0-9]{9}/)
        return pattern.test(phoneNumber)
    }
    validateFromNmae(password){
        const pattern = new RegExp (/ [a-z] /)
        return pattern.test(password)
    }

}



