var student = {};
// console.log(student);
student.marks = 70;
student.getresult = function () {
    if (this.marks > 35)
        return "pass"
    else
        return "fail"
}
console.log(student)
console.log(student.marks)
console.log(student.getresult())