var Product = /** @class */ (function () {
    function Product(pcode, pname, price) {
        this.pcode = pcode;
        this.pname = pname;
        this.price = price;
    }
    Product.prototype.DiscountedPrice = function () {
        this.disAmount = (this.price * 10) / 100;
    };
    Product.prototype.Disply = function () {
        console.log(this.disAmount);
    };
    return Product;
}());
var p = new Product(1001, "pen", 50);
p.DiscountedPrice();
p.Disply();
