class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    getGretting(){
        return `Hi I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} age years old`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
        //  in case of undefine value we have !! use twice !!undefine = false
    }
    getDescription(){
        let description = super.getDescription()

        if(this.hasMajor()){
            description +=` This major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person{
    constructor(name,age, homelocation){
        super(name, age)
        this.homelocation = homelocation
    }
    getGretting(){
        let gretting = super.getGretting()
    
        if(this.homelocation){
            gretting += ` I am visiting from ${this.homelocation}`
        }
        return gretting
    }
}

const me = new Traveler('brown', 9, 'bhopal')
//console.log(me.hasMajor())
console.log(me.getGretting())
//console.log(me.getDescription())


const other = new Traveler(`other's brown`, 3, 'china')
//console.log(other.hasMajor())
console.log(other.getGretting())
//console.log(other.getDescription())

