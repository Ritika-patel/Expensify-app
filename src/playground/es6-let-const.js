//var allow us to redefine let and assgin values
//functioned scoped
var nameVar = 'Brownie'
var nameVar = 'Brown'
console.log('nameVar', nameVar)


//let do not allow to redefine the let
//functioned scoped
let namelet = 'Jen'
namelet = 'Julu'
console.log('namelet', namelet)

//const do allow us to reassign the const - name
//functioned scoped
const nameconst = 'Frank'
//nameconst = 'gunter'
console.log('nameconst', nameconst)



//FUNCTION SCOPED
function getPetName(){
    const petname= 'pillucute'
    return petname
}

//getpetname() //we will not be able to directly access the pet name 
const petname = getPetName()
console.log('petname', petname)


// BLOCK SCOPING
var fullName = 'Jen Mead'

//NOT A BLOCK SCOPING OF VAR
if(fullName){
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}
console.log(firstName)

// BLOCK SCOPING OF CONST and LET

// if(fullName){
//     const firstName = fullName.split(' ')[0]
//     console.log(firstName)
// }
// console.log(firstName)