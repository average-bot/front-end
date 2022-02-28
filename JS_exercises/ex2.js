class Vehicle {
    constructor(...wheels) { // can have multiple values
        this.wheels = wheels;
    }
    *getWheels() { // * makes it possible to return many values
        for (let wheel of this.wheels) {
            // return returns the first value
            yield wheel; //yield returns many values
        }
    }
}

let car = new Vehicle(1, 2, 3, 4); // can have different amount of variables/values
// can be solved with an array as well, but will be more lines of code

let arr = [...car.getWheels()];
console.log(arr);