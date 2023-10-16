//Q1.Create an example of inheritance and prototypal inheritance.
class mobile{
    constructor(brand){
        this.mobilebrand=brand;
    }
    print(){
        console.log(`I have ${this.mobilebrand} mobile`);
    }
}
class model extends mobile{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    show(){
    this.print()
    console.log(`It is ${this.model}`)
    }
}
const b1=new model("Apple","13 pro max")
b1.show();

class Dog{
    constructor(color,speed){
        this._color=color
        this._speed=speed
    }
}
class Husky{
    constructor(color,speed,owner){

        this._owner=owner
    }
    show(){
        'color'+this._color
        +'owner'+this._owner
        +'speed'+this._speed
    }
}
let dog={
    color:"white"
};
let husky={
    owner:'ABC'
};
husky.__proto__=dog;
console.log(husky.owner  +  " is a owner of "+ husky.color+  " Husky")