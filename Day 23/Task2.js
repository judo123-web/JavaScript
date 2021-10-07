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
                Object.assign(value, obj)
            }
        })

    }

    delete(id) {
        if (!(this.map.has(id))) throw new Error('non-existent ID')
        else if (typeof id !== 'string') throw new Error('invaild id')
        else this.map.delete(id)
    }


    find(args) {
        if (typeof args != "object") throw new Error("invalid query")
        this.result = []
        var arr = Object.keys(args)
        this.map.forEach((value, key) => {
            main: for (var i in args) {
                if (i == 'age' || i == 'salary') {

                    for (var g in args[i]) {
                        if (g == "max") {
                            if (value[i] < args[i][g]) continue
                            else break main
                        }
                        else if (g == "min") {
                            if (value[i] > args[i][g]) continue
                            else break main
                        }
                    }
                }

                else if (value[i] != args[i]) {
                    break
                }

                if (arr[arr.length - 1] === i) {
                    this.result.push(value)
                }
            }
        })
        return this.result
    }

}


const db = new DB();

const query = {
    name: 'Nika',
    country: 'ge',
    age: {
        min: 20,
        max: 30
    },
    salary: {
        min: 300,
        max: 600
    }
};

const person1 = {
    name: 'Pitter',
    age: 24,
    country: 'ge',
    salary: 301
};

const person2 = {
    name: 'Nika',
    age: 28,
    country: 'ge',
    salary: 500
};

db.create(person1)
db.create(person2)


console.log(db.find(query))



