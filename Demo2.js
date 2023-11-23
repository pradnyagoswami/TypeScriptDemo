var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(101, "Priya");
console.log("Roll no " + s.rollno + "Name " + s.name);
