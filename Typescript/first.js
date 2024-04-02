let arr=[1,2,3,4];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0)
//         console.log(arr[i]);
// }

// let num=[1,2,3];

// for(let i=0;i<num.length;i++){
//     let ans=num[i]*10;
//     let myStr=ans.toString();
//     console.log(myStr);
// }

let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i];
}
console.log(max);
//arrays
// let personName=["sam","priya","akash"];
// let personGender=["male","female","male"];

// for(let i=0;i<personName.length;i++){
//     if(personGender[i]=="male")
//         console.log(personName[i]);
// }

//objects
const allUsers=[{
    firstName:"harith",
    personGender:"male"
},{
    firstName:"rakesh",
    personGender:"male",
},{
    firstName:"amulya",
    personGender:"female"
}]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["personGender"]=="female"){
        console.log(allUsers[i]["firstName"]);
    }

}

let numberArray=[1,2,3,4];

for(let i=numberArray.length-1;i>=0;i--){
    console.log(numberArray[i]);
}

// function  sum(){
//     let a=1;
//     let b=10;
//     return a+b;
// }
// sum();

function sum(a,b){
    this.a=a;
    this.a=a;
    return a+b;
}
const ans=sum(1,10);
console.log(ans);

//callbacks

function numberSum(a,b,fntocall){
    let result= a+b;
    fntocall(result);
}
function displayResult(data){
    console.log("result of sum:"+data)
}
let result=numberSum(1,10,displayResult);
// console.log(result);

function calculateArthimatic(a,b,type,funToCall){

   let value=funToCall(a,b,type);
   return value;
}
function numberSum(a,b,type){
    if(type=="sum"){
        let result = a + b;
        console.log(result);
    }
    // return result;     
}
function numberMinus(a,b,type){
    if(type=="Minus"){
        let result = a - b;
        console.log(result);
    }
    // return result;     
}
let callbackResult=calculateArthimatic(1,2,"Minus",numberMinus);
// console.log(callbackResult);
