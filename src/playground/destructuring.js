const person = {
    name:'ritu',
    age: 20,
    location: {
        city: 'Chandigarh',
        temp: 25
    }
}
//method 1
console.log(` ${person.name} is ${person.age}.`)

if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
}

console.log("*****************************************")

//method 2
const {name: firstname = 'Anonymous', age} = person
console.log(`${firstname} is ${age}.`)

const {city, temp: temperature } = person.location
if(city && temperature){
    console.log(`It's ${temperature} in ${city}`)
}


const book = {
    title:'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'penguin'
    }
}

const { name: publishername = 'PENGUIN' } = book.publisher
console.log(`${publishername}`)

console.log("*****************************************")

//ARRAY 
const address = ['piplani', 'barkheda', 'Bhopal', 'awadhpuri' ]
console.log(`You are in ${address[1]} ${address[2]}.`)
console.log("*****************************************")


//ARRAY DESTRUCTURING 
const addresss = ['1299 C sector', 'Bhopal', 'MP', '1234'];
const [street, cityy, state="New york", zip] = addresss;
console.log(`You are in ${cityy} ${state}.`)

const item = ['coffee (hot)' ,'2.00', '2.50', '2.75']
const [food = 'coffee(hot)', Sprice, Mprice, Lprice] = item
console.log(`A medium ${food} cost is ${Mprice}`)