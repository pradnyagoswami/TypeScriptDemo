class Student1
{
    rollno:Number;
    name:string;
    marks:any;
    percentage:any;
    m1:any;
    m2:any;
    m3:any;
    totalmark:any;

    

constructor(rollno,name,m1,m2,m3)
{

    this.rollno=rollno;
    this.name=name;
    this.m1=m1;
    this.m2=m2;
    this.m3=m3;
}
CalculateMarks()
{
    this.totalmark=(this.m1+this.m2+this.m3);


}
calculatePercentage()
{

    this.percentage=(this.totalmark/300)*100;
}
Display()
{
    console.log("Percentage = "+this.percentage+" TotalMarks = "+this.totalmark);
}

}
const s1=new Student1(11,"pradnya",85,69,99);
s1.CalculateMarks();
s1.calculatePercentage();
s1.Display();

