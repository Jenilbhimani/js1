var person = {
    age: 20
}
let birthday = function (years) {
    console.log(person)
    console.log(years)
    this.age += years
}
console.log(person.age)
birthday.call(person, 3)
console.log(person.age)