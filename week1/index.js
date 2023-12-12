// let para = document.getElementById("para")
// console.log(para)


// "use strict"
console.log("Welcome the learning of js!")

// let a = undefined;
// let a;
// a=56;
// console.log(a);

// let b = null;
// console.log(b);

// let arr=[1,2,3];
// console.log(arr);

// let x = 2+"3";
// console.log(typeof x + " the value is " + x);
// let y= 3-"2";
// console.log(typeof y + " the value is " + y)
// console.log(true + 1)
// console.log(false + 1);
// console.log(false + false);


// THROW ERROR
// var p=34;
// let p=344;
// console.log(p)



// p=34;
// console.log(p);

// console.log(window)
// console.log(window.document)




// Scoping concept
// let a = 56;
// function abc(){
//     let a=34;
//     // var b=344;
//     console.log("first a comes from func");
//     console.log(a);

// }
// abc();
// {
//     console.log("this a comes from block " + a);
    
//     var b= 45;
//     let c= 444;
//     console.log(b);  
//     console.log(c);  
// }
// console.log(b)
// // console.log(c)



// Extra concepts
// document.write("pagal me");
// let date = new Date();
// console.log(date)
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getSeconds())
// let x = BigInt("123456789012345678901234567890");
// console.log(x)



// HOSTING IN JS


// OBJECTS IN JS

// class Cat{
//     constructor(lags){
//         this.lags = lags;
//     }
//     getDetails(){
//         console.log(this.lags);
//     }
// }

// class Dog extends Cat{
//     constructor(lags,){
//         super(lags);
//     }
// }
// // let cat = new Cat("Shivani");
// // cat.getDetails();
// let dog = new Dog("Mohit");
// dog.getDetails();



let obj = {
    name:"M",
    love:"S",
    bond:`M and S will you love each other forever!`,
    conclusion:"Yes",
    func:function(){
        console.log(this.name + " and " + this.love + " will you love each other forever ");
    },
   
};

for(let key in obj){
    console.log(obj[key]);
}

