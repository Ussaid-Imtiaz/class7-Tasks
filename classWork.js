function engineEfficiency(vehicle) {
    let calculation = vehicle.milage * vehicle.model;
    return calculation;
}
let lexus = {
    milage: 2000,
    model: 2025
};
let H2r = {
    milage: 200,
    model: 2021
};
lexus = H2r;
H2r = lexus;
let jf17 = {
    milage: 500,
    model: 2017,
    speed: 500
};
lexus = jf17;
let busObj = {
    model: 2021,
    engine_milage: 1500,
    milage: "too much"
};
// console.log(engineEfficiency(busObj))
let BMW = {
    model: 2030,
    milage: 2000,
    color: "Black"
};
lexus = {
    model: 2030,
    milage: 2000
};
lexus = BMW;
lexus = {
    model: 2030,
    milage: 2000
};
// console.log(lexus)
let num1;
let num2 = 2;
num1 = 3; //fresh
num1 = num2; //stale
let ball = {
    diameter: 10
};
let sphere = {
    diameter: 20,
};
sphere = ball;
ball = sphere;
let tube = {
    diameter: 12,
    length: 3
};
// tube = ball;
ball = tube;
let myType = {
    name: "Zia",
    id: 1
};
myType = {
    id: 2,
    name: "Tom"
};
// myType ={
//     id : 2,
//     name_person : "Tom"
// }
let x;
x = { id: 2, fullname: "Zia" };
// myType = { id: 2, name: "Tom", age: 22};
x = { id: 12, firstName: "Usman" };
let y = { id: 500, address: "ISB" };
let z = { id: 500, area: 500 };
// x = y;
// x = z;
// y = x;
// z = x;
// y = z;
// z = y;
let variableType;
variableType = 8;
variableType = "Eight";
let obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_id: 7873,
    teacher_name: "seema"
};
// console.log(obj1.teacher_id)
// console.log(obj1.name)
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
myval = myval + 2;
// myval.toLowerCase();
// console.log(myval)
//Unknown
let value;
value = true; // OK
value = 42; // OK
value = "HEY!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK
// value = value + 2;
// value.toLowerCase()
if (typeof value == "string") {
    value.toLowerCase();
}
export {};
// let newDataType : never;
// function error (message : string) : never {
// console.log("laskl");
// console.log("laskl");
// console.log("laskl");
// console.log("laskl");
// console.log("laskl");
// throw new Error(message)
// }
// let result = error("askjas")
// console.log(result)
// function infiniteLoop(message : string) {
//     while (true) {
//         console.log(message)// This loop runs indefinitely, so the function never returns
//     }  
// }
// infiniteLoop("Something went Wrong")
// function throwError(message: string): never {
//     throw new Error(message);
// }
// const result: never = throwError("Something went wrong.");
// console.log(result)
