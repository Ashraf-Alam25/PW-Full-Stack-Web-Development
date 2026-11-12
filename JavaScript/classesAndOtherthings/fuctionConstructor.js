function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("macbook",310000,5);
console.log(p);

let x ={
    p : Product
};

x.p("airpod",5000,5);
console.log(x);

