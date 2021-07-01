// arguments object - no longer bound with arrow function

const add = function (a, b){
    console.log(arguments)
    return a+b
}
console.log(add(55, 1))

                 //A.R.R.O.W
const addTwo = (a, b) => {
//    console.log(arguments)
    return a+b
}
console.log(addTwo(55, 6))

                 //T.H.I.S
// this keyword - bound

const user = {
    name: "akkooo",
    cities: ['Bhopal', 'Kanpur', 'assam'],
    printPlacesLived: function(){
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })
    }
}
user.printPlacesLived()

// this keyword - no longer bound{not work}
// const User = {
//     name: "riti",
//     cities: ['Bhopal', 'Kanpur', 'assam'],
//     printPlacesLivedIn: () => { // arrow not allowed
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city)
//         })
//     }
// }
// User.printPlacesLivedIn()

const Uuser = {
    name: "ittu",
    cities: ['Bhopal', 'Kanpur', 'assam'],
    printPlacesLiveddd(){
        const cityMessage = this.cities.map((city) => {
            return this.name + ' has lived in ' + city
        })
          return cityMessage
    }
}
console.log(Uuser.printPlacesLiveddd())


const multiplier= {
    numbers:[1, 2, 3],
    multipliedBy:4,
    multiply(){
        return this.numbers.map((number) => this.multipliedBy*number
        )}
}
console.log(multiplier.multiply())