"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var icecreamFunction_1 = require("./icecreamFunction");
console.log("welcome");
var empCode = 1234;
var empName = "Naveen";
console.log(empCode);
console.log(empName);
var deptName = "cloud & Engg";
var flagDeptName = true;
if (flagDeptName) {
    var deptName_1;
    deptName_1 = "Java";
    console.log(deptName_1);
}
console.log(deptName);
var skills = ["java", "Angular", "react"];
console.log(skills);
var skillWithYear = ["java", 1];
console.log(skillWithYear);
//function with optional param
function selectedIceCream(flav1, flav2, flav3) {
    console.log(flav1, ",", flav2);
}
selectedIceCream("chololate");
//function with rest param
function selectedIceCreamWithoutLimit(flav1) {
    var otherFlav = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherFlav[_i - 1] = arguments[_i];
    }
    console.log(flav1);
}
selectedIceCreamWithoutLimit("chocolate");
//arrow function
var arrowFunction = function (flav1, flav2) {
    if (flav2 == undefined)
        console.log(flav1);
    else
        console.log(flav1, ",", flav2);
};
arrowFunction("butterscotch", "chocolate");
console.log("Functionality written on another file");
var obj = new icecreamFunction_1.default();
obj.arrowfunction("Butterscotch", "Blueberry");
obj.selectIcecremFlavWithoutLimit("Chocolate", "Vanilla", "strawberry");
//export task
var objVal = new icecreamFunction_1.Validation();
objVal.validateEmail("vasanthalakshmi@gmail.com");
objVal.validatePincode("95677");
objVal.validateEmail("vasantha#lakshmi@gmail.com");
objVal.validatePincode("201 305");
objVal.validatePincode("132103");
