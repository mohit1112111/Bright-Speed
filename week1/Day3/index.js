// "use strict"
//  METHOD OVVERRRIDIG IN JS

// class X {
//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     getDetails(a,b){
//         console.log(a+b);
//     }
// };
// class Y extends X{
//     constructor(a,b,c){
//         super(a,b);
        
//         this.c=c;
//     }
//     getDetails(a,b,c){
//         console.log(a+b+c);
//     }
// }

// let objY = new Y(1,2,3);
// objY.getDetails(1,2,3);





// fuctions in js 


// Function to perform addition
// const add = (num1, num2) => num1 + num2;

// // Function to perform subtraction
// const subtract = (num1, num2) => num1 - num2;

// // Function to perform multiplication
// const multiply = (num1, num2) => num1 * num2;

// // Function to perform division
// const divide = (num1, num2) => {
//   if (num2 === 0) {
//     return "Cannot divide by zero";
//   }
//   return num1 / num2;
// };

// // Function to display basic UI and perform calculations
// const calculator = () => {
//   let operation = prompt("Enter an operation (+, -, *, /):");
//   let num1 = parseFloat(prompt("Enter the first number:"));
//   let num2 = parseFloat(prompt("Enter the second number:"));

//   let result;
//   switch (operation) {
//     case '+':
//       result = add(num1, num2);
//       break;
//     case '-':
//       result = subtract(num1, num2);
//       break;
//     case '*':
//       result = multiply(num1, num2);
//       break;
//     case '/':
//       result = divide(num1, num2);
//       break;
//     default:
//       result = "Invalid operation";
//       break;
//   }

//   let res = document.getElementById('res');
//   res.innerHTML = result;
// };

// // Run the calculator function
// calculator();


//  SIMPLE CALCULATER
const calculate = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operation";
        break;
    }
  
    document.getElementById('result').innerText = `Result: ${result}`;
  };

  

//SPREAD OPERATOR


//Hosting 
//  x=2;
//  console.log(x);
//  var x;


// ARRAY IN JS

//to string method
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let str="";
// str=fruits.toString();
// console.log(str+" and the type of str is "+ typeof str);

//sort method 

// function compare(a,b){
//     return a-b;
// }
// let arr = [13,54,768,89,90,3,13];
// // arr.sort(compare);
// let res = arr.sort((a,b)=>a-b)
// console.log(arr);
// console.log(res);

//FOR EACH LOOP
// let res = fruits.forEach((ele,index,fruits)=>{
//     console.log(ele);
// })
// console.log(res);


//Indexof method
// console.log(arr.indexOf(54));
// console.log(arr.lastIndexOf(13))
// console.log(arr.indexOf(3343))

// let x =[40];
// console.log(x);
// let y= new Array(40);
// console.log(y);
// console.log(Array.isArray(x));
// console.log(x instanceof Array);
// console.log();

//Join method
// let res = arr.join('_');
// console.log(arr);
// console.log(res)
// console.log(typeof res)

//delete operator
// let ele=delete arr[2];
// console.log(arr);
// console.log(ele);

//concate method 
// let arr1=[1,2,3,4];
// let arr2 = [3,5,6,7];
// let arr3=[22,22,44];
// let newarr = arr1.concat(arr2,arr3,"Mohit","MS")
// console.log(newarr);
// console.log(arr1,arr2);

//slice method
// let arr1 = [1,2,3,4,5,6];
// let res=arr1.slice(0,4);
// console.log(res)
// console.log(arr1)

//splice method
// let res1=arr1.splice(1,3,34,5,567,677);
// console.log(res1)
// console.log(arr1)


//sorting of an array of objects
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// cars.sort((a,b)=>{
//    return a.year - b.year;
// })

// cars.sort((a,b)=>{
//    let x= a.type.toLocaleLowerCase();
//     let y= b.type.toLocaleLowerCase();
//     if(x<y)return -1;
//     if(x>y) return 1;
//     return 0;
// })
// console.log(cars);


// filter method of array
// let people = [
//     {
//         name : "Mohit",
//         age : 10
//     },
//     {
//         name : "Shivani",
//         age : 15
//     },
//     {
//         name : "Deepak",
//         age : 20
//     }
// ]

// let res = people.filter((ele)=>{
//     let x =  ele.age;
//     return x%2==0;
// })
// console.log(res);