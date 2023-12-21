var x = [
    { "number": 3, "value": "test" },
    { "number": 1, "value": "test" },
    { "number": 2, "value": "test" }
]

var arr = [...x]
console.log(arr)
arr.sort((a,b)=>{
    return a.number - b.number;
})
console.log(x);
console.log(arr)

for(ele of arr){
    for(key in ele){
        console.log(key);
    }
}


var app = angular.module('app', []);
app.controller('directiveCtrl', ["$scope", "$timeout", function (sc, $timeout) {
    // ng-show and ng-hide directives
    // sc.isShow = false;
    sc.isShow = true;

    // sc.isHide = true;
    sc.isHide = false;
    // show and hide using ng-if directive
    sc.displayIf = true;
    // sc.displayIf = false;
    // ng-class directive
    sc.isRed = true;
    // sc.isRed = false;

    sc.imageUrl = "";

    sc.showImage = function () {
        sc.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s";
    }

    // ng-repate directive
    // sc.arr = [1,2,3,4,5];
    // sc.arr = [1,2,3,4,5,5];
    sc.obj = [{ num: 1 }, { num: 1 }, { num: 2 }];

    sc.obj1 = {
        name: "Mohit",
        add: "mzn",
        age: 23
    }

    sc.name = 'deepak kumar';

    sc.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    sc.names1 = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    // sorting of aaray based on user input
    sc.names2 = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];

    sc.getData = function (x) {
        sc.myOrderBy = x;
    }
    // one time data bnding

    sc.message = "Yes ";
    $timeout(function () {

        if (sc.message == "No") {
            sc.message = "Yes"
        } else {
            sc.message = "No"
        }

    }, 1000)
    sc.changeData = function () {

        sc.message = "Yes";
    }
    // function to change the color of paragraph

    sc.changeColor = function () {
        sc.giveColor = true;
    }

    // Toggle the buttons
    sc.isTrueSignUp = true;
    sc.isTrueLogin = true;
    sc.hideLogin = function () {
        if (sc.isTrueSignUp == true) {

            sc.isTrueSignUp = false;
        } else {
            sc.isTrueSignUp = true;
        }
    }
    sc.hideSignUp = function () {
        if (sc.isTrueLogin == true) {

            sc.isTrueLogin = false;
        } else {
            sc.isTrueLogin = true;
        }

    }

    // taking user data and store in object
    sc.userData = {};
    sc.firstName = "";
    sc.lastName = "";
    sc.gmail = "";
    sc.pass = "";

    sc.getUserData = function () {
        sc.userData['firstName'] = sc.firstName;
        sc.userData.lastName = sc.lastName;
        sc.userData.Gmail = sc.gamil;
        sc.userData.password = sc.pass;
        //print object in console
        console.log(sc.userData);

        //making input box auto empty
        sc.firstName = "";
        sc.lastName = "";
        sc.gmail = "";
        sc.pass = "";
    }


    // Logic for sign up and login form



}]);