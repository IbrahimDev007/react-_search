class Car{
   constructor(){
this.wheel=4;
this.type='hatchback'

   } 
   
}
class Ford extends Car{
    constructor(){ 
        super();
        this.windows=4;
    }
}

const car = new Car();
const ford = new Ford();
console.log(ford.type); 
