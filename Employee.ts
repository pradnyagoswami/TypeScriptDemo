class Employee
{

    id:Number;
    name:string;
    salary:any;
    hra:any;
    Ta:any;
    Pf:any;
    Da:any;
    gross:any;


    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;


    }
    calculate()
    {
    this.hra=this.salary*0.40;
    this.Da=this.salary*0.20;
    this.Ta=this.salary*0.10;
    this.Pf=this.salary*0.12;
    this.gross=(this.salary+this.hra+this.Da+this.Ta)-this.Pf;

    }
    print()
    {
        console.log(this.gross);
    }


}
const e=new Employee(101,"pradnya",25000);
e.calculate();
e.print();
