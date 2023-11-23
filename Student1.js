var Student1 = /** @class */ (function () {
    function Student1(rollno, name, m1, m2, m3) {
        this.rollno = rollno;
        this.name = name;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }
    Student1.prototype.CalculateMarks = function () {
        this.totalmark = (this.m1 + this.m2 + this.m3);
    };
    Student1.prototype.calculatePercentage = function () {
        this.percentage = (this.totalmark / 300) * 100;
    };
    Student1.prototype.Display = function () {
        console.log("Percentage = " + this.percentage + " TotalMarks = " + this.totalmark);
    };
    return Student1;
}());
var s1 = new Student1(11, "pradnya", 85, 69, 99);
s1.CalculateMarks();
s1.calculatePercentage();
s1.Display();
