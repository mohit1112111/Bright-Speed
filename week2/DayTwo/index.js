var app = angular.module('app', []);
app.controller('userCtrl', function ($scope) {
    $scope.name = "Mohit Kumar";
    this.pagal = "shivani";
    // if we write pagal as var pagal then it will not accessible
    // Inside a arrow function we can not use this keyword
    let a = 34;
    let c = 23;
    this.sum = a + c;

    this.printName = () => {
        return "Hello Mohit";
    }

    function add() {
        return 45;
    }

    this.add = add();

})

// for nested controller
app.controller('studentCtrl', function () {
    this.name = "Deepak Kumar"
    this.nums = [1,2,1,1];
})

// controller for practice ng-module
app.controller('ngmoduleCtrl', function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";

    //we can also do like that 
    // $scope.firstName="Mohit";
    // $scope.lastName="Kumar";


    // it will not work like that 
    // $scope.fullName = function(){
    //     return firstName+" "+ lastName;
    // }

    //It will like that
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }


})

//Controller for ng-repeat practice
//Using the ng-repeate we can iterate over array and objects
app.controller('ngrepeateCtrl', ["$scope", "$window", "$location", function (sc, win, loc) {

    //logic to redirect 
    sc.redirectToAnotherPage = function () {
        win.location.href = 'https://www.google.com';
    };
    //logic to redirect another tab
    sc.gotoAnotherPage = function () {
        window.open('https://www.google.com', '_blank');
    }

    //counter function logic
    sc.counter = 0;
    sc.couterFunction=function(){
      
        if(sc.counter <= 9){
            sc.counter++;
        }else{
            sc.counter="Are you pagal";
        }

    }

    //Iterating over array
    sc.arr = [1,2,3,4,5];
    // this.arr = [1,2,3,4,5,5];
    // sc.arr=["Emil", "Tobias", "Linus"]
    sc.obj ={
        name:"Mohit",
        age:23,
        address:"mzn"
    }


    //  add ,sub ,min,mul functions
    sc.a=23;
    sc.b=4;
    sc.result1;
    sc.result2;
    sc.result3;
    sc.result4;
    sc.add = function(a,b){
        sc.result1= a+b;
    }
    sc.sub = function(a,b){
        sc.result2= a-b;
    }
    sc.mul = function(a,b){
        sc.result3= a*b;
    }
    sc.div = function(a,b){
        sc.result4= a/b;
    }

    sc.printHi=function(){
        console.log("Hi")
    }
    // tast
   

}])

