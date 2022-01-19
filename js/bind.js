var student1 = {
    studentname: "jenil",
    Section: "a"
}
var student2 = {
    studentname: "raj",
    Section: "b"
}
function calclulatetotalmarks(subject1, subject2, subject3) {
    let totalmarks = subject1 + subject2 + subject3;
    let message = `hey ${this.studentname},your total marks is${totalmarks}`
    console.log(message)
}
// var student1calculte = calclulatetotalmarks.bind(student1);
// student1calculte(20, 55, 88)
var student2calculte = calclulatetotalmarks.bind({
    studentname: "raj",
    Section: "b"
})
// console.log(student2calculte)
student2calculte(44, 55, 66)