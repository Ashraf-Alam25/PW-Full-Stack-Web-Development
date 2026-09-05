let ob = {id:100, name:"Ashraf", salary:100000000 };
console.log(ob);

let em = new Object();
em.id = 101;
em.name = "khan";
console.log(em);


function emp(i, n, s){
    this.id = i ;
    this.name = n;
    this.salary = s;
}

const e = new emp(1003,"tam", 15000);
console.log(e);
