// let message = "Hello TypeScript";
// console.log(message);

// var emp = {id:1,name:"pradnya"};
// console.log(emp.name);
//----------------------------------------------------------------------------------------------
// class Date1
// {

//     day:Number;
//     month:string;
//     year:Number;
    
//     constructor(day,month,year)
//     {
//         this.day=day;
//         this.month=month;
//         this.year=year;
//     }

//     print()
//     {
//         console.log(this.day+"/"+this.month+"/"+this.year);
//     }

// }
// const d=new Date1(23,"Nov",2023);
// d.print();

//-------------------------------------------------------------------------------------

interface IData
{
    a:Number;
    b:Number;
}
class Test
{
    print(value:IData)
    {
        console.log(value.a+" "+value.b);
    }

}
const IData = {a:10,b:20};
const t=new Test();
t.print(IData);