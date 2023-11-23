class Product
{

    pcode:number;
    pname:string;
    price:any;
    disAmount:any;


    constructor(pcode,pname,price)
    {
        this.pcode=pcode;
        this.pname=pname;
        this.price=price;

    }
    DiscountedPrice()
    {
        this.disAmount=(this.price*10)/100;

    }
    Disply()
    {
        console.log(this.disAmount);
    }
}
const p=new Product(1001,"pen",50);
p.DiscountedPrice();
p.Disply();