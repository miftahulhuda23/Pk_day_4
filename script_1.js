const c = 1
{
    const c = 2
}

console.log(c)
let grade = 87;

if(grade >= 90) {
    console.log("A")
} 
else if (grade >= 80) {
    console.log("B")
}
else if (grade >= 70) {
    console.log("C")
}
else if (grade >= 60) {
    console.log("D")
}
else {
    console.log("F")
}

let animal = "Giraffe"
switch (animal) {
    case "Cow" :
        console.log("this is cow")
        break
    case "Giraffe" :
        console.log("this is Giraffe")
        break
    case "Dog" :
        console.log("this is Dog")
        break
    case "Pig" :
        console.log("this is Pig")
    default :
        console.log("this is not animal")
        break
}

let text = ""
for (let i= 0; i < 5; i++) {
    text += i + ","
    console.log(text)
}

let person = {firstName: "Jhon", lastName: "Doe", Age: 25 }
let text1 = ""
for (let x in person) {
    text1 +=person[x] + " "
    console.log(text1)
}

let i = 0
let text2 = ""
while (i < 5) {
    text2 += i + ","
    i++
    console.log(text2)
}

let text3 =""
let a = 0
do {
    text3 += a+ ","
    a++
    console.log(text3)
} while (i < 5)