import PrintFlav, { Validation } from "./icecreamFunction";

console.log("welcome");

var empCode: Number = 1234;
const empName: String = "Naveen";

console.log(empCode);
console.log(empName);

let deptName = "cloud & Engg";
let flagDeptName = true;

if (flagDeptName) {
  let deptName: string;
  deptName = "Java";
  console.log(deptName);
}
console.log(deptName);

let skills: String[] = ["java", "Angular", "react"];
console.log(skills);

let skillWithYear: any[] = ["java", 1];
console.log(skillWithYear);

//function with optional param
function selectedIceCream(flav1: string, flav2?: string, flav3?: string) {
  console.log(flav1, ",", flav2);
}
selectedIceCream("chololate");
//function with rest param
function selectedIceCreamWithoutLimit(flav1: string, ...otherFlav: string[]) {
  console.log(flav1);
}
selectedIceCreamWithoutLimit("chocolate");

//arrow function

let arrowFunction = (flav1: string, flav2?: string) => {
  if (flav2 == undefined) console.log(flav1);
  else console.log(flav1, ",", flav2);
};
arrowFunction("butterscotch", "chocolate");

console.log("Functionality written on another file");
var obj = new PrintFlav();
obj.arrowfunction("Butterscotch", "Blueberry");
obj.selectIcecremFlavWithoutLimit("Chocolate", "Vanilla", "strawberry");

//export task
var objVal = new Validation();
objVal.validateEmail("vasanthalakshmi@gmail.com");
objVal.validatePincode("95677");

objVal.validateEmail("vasantha#lakshmi@gmail.com");
objVal.validatePincode("201 305");
objVal.validatePincode("132103");
