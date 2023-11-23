var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.calculate = function () {
        this.hra = this.salary * 0.40;
        this.Da = this.salary * 0.20;
        this.Ta = this.salary * 0.10;
        this.Pf = this.salary * 0.12;
        this.gross = (this.salary + this.hra + this.Da + this.Ta) - this.Pf;
    };
    Employee.prototype.print = function () {
        console.log(this.gross);
    };
    return Employee;
}());
var e = new Employee(101, "pradnya", 25000);
e.calculate();
e.print();
