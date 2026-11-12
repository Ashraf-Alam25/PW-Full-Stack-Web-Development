class Product{
    name;
    price;
    #rating; // now it is private using #
    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }
    setRating (r){
        if(r<0) return;
        this.#rating = r;
    }
    getRating(){
        console.log(this.#rating);
        
    }
}
const p = new Product("iphone", 150000, 5);
console.log(p);
p.setRating(10);
p.getRating();
console.log(p);
