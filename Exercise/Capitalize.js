let word = "hello purwadhika surabaya" // Hello Purwadhika Jakarta
let result = ""

for (let i = 0 ; i < word.length ; i++) {
    if (i == 0 || word.charAt(i - 1) == " ") {
        result += word.charAt(i).toUpperCase()
    } else (
        result += word.charAt(i).toLowerCase()
    )
}

console.log (result)