function f(arr) {
    try {
        if (!(Array.isArray(arr))) {
            throw new Error('First parameter required and has to be only array')
        } else if (arr == '') {
            return 0
        } else {

            var ans = 0
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'number') {
                    ans += arr[i]
                }

                else if (Array.isArray(arr[i])) {
                    if (typeof (f(arr[i])) === 'string') {
                        throw new Error('On any dimension (level) was found not a number or not a array')
                    }
                    ans += f(arr[i])
                }
                else {
                    throw new Error('On any dimension (level) was found not a number or not a array')
                }
            }
            return ans
        }
    } catch (err) {
        return (err.message)
    }
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr))







