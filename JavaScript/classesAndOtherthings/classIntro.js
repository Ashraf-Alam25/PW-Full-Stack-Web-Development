class Product{
    name;
    price;
    #rating; // now it is private using #
    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }
    display(){
        console.log("current product displaying", this.name, this.price, this.#rating);
    }
    static custom(){
        console.log("calling a static method");
        
    }

}
const p = new Product("iphone", 150000, 5);
console.log(p);
p.display();

Product.custom();  // static mehtod can be call only class name not through object
