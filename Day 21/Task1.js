class Validator {
    isEmail(email) {
        var valregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return (email.match(valregex)) ? true : false
    }

    isDomain(domain) {
        var valdomain = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
        return (domain.match(valdomain)) ? true : false
    }

    isDate(date) {
        var valdate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/g
        return (date.match(valdate)) ? true : false

    }

    isPhone(phone) {
        var valphone =/^[+]*[(]{0,1}[995]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        return (phone.match(valphone)) ? true : false

    }

}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92'))


