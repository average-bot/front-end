// no "protected" in JavaScript
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    get bio() { // getter and setter
        console.log("I am " + this.name);
    }
    static reads() { // can only call it from the class, cannot call it from an object
        // two objects access the static variables but it will be the same for both of them
        // changed for both sides
        console.log('I am reading');
    }
}

class Student extends Person {
    constructor(id, name) {
        super(id, name); // no this infront of super
    }
}

let std = new Student(1, 'Sandra');
//console.log(std.name);
//std.name = 'Sander';
//std.bio();

Person.reads();
let p = new Person(2, 'Musa');
//p.reads(); // cannot call a static function from outside