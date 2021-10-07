class DB {
    constructor() {
        this.map = new Map()
    }

    create(obj) {
        if (typeof obj !== 'object') throw new Error("typeof obj should be a object")
        var id = Date.now().toString(36) + Math.random().toString(36).substr(2)
        this.map.set(id, obj)
        return id
    }

    read(id) {
        if (typeof id !== 'string') throw new Error("id shuld be a string")
        else if (this.map.has(id)) {
            var res = {}
            res = { ...res, ...this.map.get(id) }
            res.id = id
            return res
        }
        return null
    }

    readAll(...arg) {
        if (arg.length != 0) throw new Error("don't pass a parameter to the  readAll method")
        var res = []
        this.map.forEach(function (value, key) {
            res.push(value)
        })
        return res
    }

    update(id, obj) {
        if (typeof id == "undefined" || typeof obj == "undefined") throw new Error("2 parameter are required")
        else if (typeof id != "string") throw new Error("id should be a string")
        else if (!(this.map.has(id))) throw new Error("non-existing id is passed")
        else if (typeof obj !== 'object') throw new TypeError("second parameter is not valid")

        this.map.forEach((value, key) => {
            if (key == id) {
                Object.assign(value,obj)
            }
        })

    }

    delete(id) {
        if (!(this.map.has(id))) throw new Error('non-existent ID')
        else if (typeof id !== 'string') throw new Error('invaild id')
        else this.map.delete(id)
    }
}


const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);
console.log(id)

const customer = db.read(id);
const customers = db.readAll(); // array of users
console.log(customers) 

db.update(id, { age: 222 }); // id
console.log(db.readAll())

db.delete(id); // true
console.log(db.readAll())










