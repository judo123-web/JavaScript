function reverse(arr){
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError('First parameter required and has to be only array')
        } else if (arr.length == 0) {
            throw new TypeError('passed empty array')
        } else {
            for (var i = arr.length-2; i>=0; i--) {
                var num = arr[i]
                arr.splice(i,1)
                arr.push(num)
            }            
        }
        return arr
    } catch (err) {
        return err.message;
    }
}

const arr = [1,2,3]
console.log(reverse(arr))