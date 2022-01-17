// write  a javascript function which accepts an argument and return the type.

//anonymous functionl :-
// var dosum=function(a,b)
// {
//     return a+b;
// }
// console.log(dosum(10,20))
 

// call back function:-
function abc(xyz) {
    console.log("xyz", xyz)
    console.log(xyz(10, 20))
}

abc((a, b) => {
    return a + b
    // console.log(d(10, 20))
})



