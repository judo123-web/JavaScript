var n = 1000
var num = 0

while (n /2 > 50) {
    num +=1
    n /= 2
}
console.log("Number is" +" "+ n.toFixed(1))
console.log("The number of iterations is " + num)
