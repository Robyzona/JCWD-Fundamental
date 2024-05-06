let word =  "makan"
let reverseWord = "" // Kata yang dibalik

// console.log (word.charAt(4))

for (let i = word.length - 1; i>=0 ; i--) {
    // console.log (word.charAt(i))
    reverseWord += word.charAt(i)
}

// console.log (word)
// console.log (reverseWord)

if (word == reverseWord) {
    console.log (`${word} is palindrome`)
} else {
    console.log (`${word} is not palindrome`)
}