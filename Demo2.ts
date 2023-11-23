interface IStudent
{
rollno:Number;
name:string;

}
class Student
{

    rollno:Number;
    name:string;

    constructor(rollno,name)
    {
        this.rollno=rollno;
        this.name=name;


    }
}
const s:IStudent=new Student(101,"Priya");
console.log("Roll no "+s.rollno+" Name "+s.name);