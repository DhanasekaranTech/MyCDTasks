
//Car with properties for make, model, and year and a method getInfo() that returns a string containing the car's make, model, and year.

class Car{
 
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    getInfo(){
        const info = `${this.make} ${this.model} ${this.year}`
        return info;
    }
   
    setInfo(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;   
    }

}

//instantiate an object of the Car class 
const MyCar = new Car('TATA','punch',2024)

//MyCar.setInfo('toyato','new',2003)

const info = MyCar.getInfo()


console.log(info);
