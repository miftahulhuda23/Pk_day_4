console.log("loading")
const h1 = document.querySelector('h1')
console.log(h1.text)
console.assert(document.querySelector('h2'),'h2 not found!')

const member = [
    {first: 'neil', last: 'Amstrong'},
    {First: 'Adam', last: 'Khan'},
    {First: 'budi', last: 'Mandara'}
]

console.table(member)

let number = 1
let string = "pesantren coding ${number}"
console.log(string)

let string1 = "pesantren coding ${number}"
console.log(string1)

let info = ['first', 'second', 'third']
console.log(info[0])
console.log(info.length)

let plus = 2 + 2;
let minus = 3 - 2;
let modulus = 7 % 2;
let multiple = 4 * 5;
console.log(plus)
console.log(minus)
console.log(modulus)
console.log(multiple)

let interger = 8
let comparison = interger == "8"
let comparison1 = interger !== 8
console.log(comparison)
console.log(comparison1)

let comparison2 = interger === 12 && interger === 8
console.log(comparison2)

if (interger === 12 && interger === 8) {
    console.log("ini benar")
} else {
    console.log("ini tidak benar")
}

let result = Math.round(4.7)
console.log(result)

for (let i= 0; i <= 9; i++) {
    console.log(i)
    document.getElementById("id").innerHTML += `<ul>
    <li>${i}</li>
    </ul>`
}


let currentDate = new Date ()
console.log(currentDate)

let year = currentDate.getFullYear()
console.log(`this year is ${year}`)

let month = currentDate.getMonth()
console.log(`this year is ${month}`)

let date = currentDate.getDate()
console.log(`this year is ${date}`)

let vehicles = ["motorcycle", "rocket", "plane", "ship"];

result5 = vehicles.join(" ");
result6 = vehicles.length;
result7 = vehicles.includes("plane");
result8 = vehicles.push("tank");
result9 = vehicles.pop();
console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)
console.log(result9)

