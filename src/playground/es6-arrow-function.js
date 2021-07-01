function square(x) {
    return x * x
}

console.log(square(4))

// ARROW FUNCTION 
const squareArrow = (x) =>  x * x
console.log(squareArrow(0))

const getFirstName = (x) => x.split(' ')[0]
console.log(getFirstName("mukka bukka"))