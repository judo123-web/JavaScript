function getDivisors(num) {
    try {
        if (typeof num === 'string') {
            throw new Error("Error: parameter type is not a Number")
        }
        else if(num == 0) {
            throw new Error("Error: parameter can't be a 0")
        }

        else if(num < 0) {
            throw new Error("parameter should be a positive integer")
        }
        else {
            var ans = []
            for (var i = 0; i <= num; i++) {
                if (num % i == 0) ans.push(i)
            }
            console.log(ans)
        }
    } catch(err) {
        console.log(err.message)
    }
}

getDivisors(12)
getDivisors('Content')
getDivisors(0)