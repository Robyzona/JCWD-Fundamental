let number = 11

let pembagi = 0

for (let i = 1 ; i <= number ; i++) {
    if (number % i === 0 ){
        pembagi ++
    }
}
console.log(pembagi== 2 ? "Prime Number" : "Not Prime Number")