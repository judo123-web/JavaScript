function rotate(array, number, string = "right") {
    try {
        if (!Array.isArray(array)) {
            throw new Error("first parameter required and has to be only array")
        } else if (typeof number !== 'number') {
            throw new Error("second parameter required and has to be number")
        } else if (typeof string !== 'string') {
            throw new Error("third parameter optional and has to be only string")
        }


        for (let i = 0; i< number;i++) {
            if (string === "right") {
                num = array.pop()
                arr.unshift(num)
            } else {
                num = array.shift()
                array.push(num)
            }
        }

        return array

    } catch (err) {
        return err.message
    }
}
var arr = [1,2,3];

console.log(rotate(arr, 1, 'left'))
console.log(arr)



