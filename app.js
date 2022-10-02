// const amount = 12
// if (amount<10)
// {
//     console.log('small number')
// }
// else console.log("large  number")
// console.log(amount+": This is my first node usage")
//Modules

// const john = "John"
// const peter = "peter"
// const sayHi = (name)=>{
//     console.log(`Hello there ${name}`)
// }
// sayHi(john)
// sayHi('susan')
// sayHi(peter)
const os=require('os')
const user = os.userInfo()
console.log(user)
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)