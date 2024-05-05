let age = 15

if (age >=17) {
    console.log("You can now create an ID card")
} else {
    console.log ("You're not old enough to create an ID card")
}

let grade = "A"

if (grade ==="A"){
    console.log ("Excellent Result")
} else if (grade === "B") {
    console.log ("Great Result")
} else if (grade === "C"){
    console.log ("Average Result")
} else {
    console.log ("Invalid Grade")
}


let now = new Date ()
let day = now.getDay ()

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    default:
        console.log ("Sabtu")
}

let a = " "

if (a){
    console.log (true)
} else {
    console.log (false)
}

let kata = "Javascript"
console.log(kata === "Javascript" ? "Javascript" : "not Javasript")
