class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User{
    constructor(name,surname,year) {
        super(name,surname)
        this.year = year
    }

    getCourse() {
        var today = new Date()
        var substract = today.getFullYear() - this.year
        return (substract < 4) ? `${substract} - course` : "already graduated"
    }

}

var student = new Student('John', 'Smith', 2016);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2016
console.log(student.getCourse()); 



