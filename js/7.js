// let person = {
//     firstname: 'chaku',
//     lastname: 'dadu',
//     middlename: 'baghaboy',
//     currentage: '22',
// }
// let { firstname, lastname, middlename, currentage: age = 25 } = person;
// console.log(middlename)
// console.log(age)
// console.log(person)
// let b = person;
// console.log(firstname)
// console.log(typeof (middlename))
// console.log(b)
// function getperson() {
//     return null
// }
// let { firstname, lastname } = getperson() || {};
// console.log(lastname, firstname)
// let empolyee = {
//     id: 1111,
//     name: {
//         firstname: 'chaku',
//         lastname: 'dadu',
//         address: {
//             city: 'surat',
//             state: 'gj',
//             country: 'hindustan',
//         }
//     }
// }
let {
    name: {
        firstname,
        lastname
    }
} = empolyee;
let { lastname, firstname: name } = empolyee.name;
let { city, state } = empolyee.name.address;
console.log(city)
// console.log(state)
// console.log(name);
// console.log(lastname);

