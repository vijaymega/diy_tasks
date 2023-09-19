import { Add } from "./index1.js";
let y='global';
console.log('value of y in global scope:' + y);

function myFun(){
    const y= 'functional';
    console.log('value of y in functional scope:'+ y);
    if(true) {
        const y='block';
        console.log('value of y in block scope:'+ y);
    }
};
myFun();

function newfn() {
    console.log('value of y in lexical scoping:'+ y);
}
newfn();

let z=[11,12,13,14,15];

 
console.log(Add(...z));