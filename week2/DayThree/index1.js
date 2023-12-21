var app = angular.module('app',[]);
app.controller('index1Ctrl',["$scope",function(sc){
    sc.isDisplaySignUp=false;
    sc.isDisplayLogin=false;
    
    sc.showSignUp = function(){
        sc.isDisplaySignUp=true;
        sc.isDisplayLogin=false;
    }
    sc.showLogin = function(){
        sc.isDisplayLogin=true;
        sc.isDisplaySignUp=false;
    }

    sc.userAllData=[];
    // sc.userData = {};
    sc.firstName = "";
    sc.lastName = "";
    sc.gmail = "";
    sc.pass = "";

    sc.getUserData = function () {
        sc.userData = {};
        sc.userData['firstName'] = sc.firstName;
        sc.userData.lastName = sc.lastName;
        sc.userData.Gmail = sc.gamil;
        sc.userData.password = sc.pass;
        //print object in console
        
        console.log(sc.userData);
        sc.userAllData.push(sc.userData);
        console.log(sc.userAllData);
        
        
        //making input box auto empty
        sc.firstName = "";
        sc.lastName = "";
        sc.gmail = "";
        sc.pass = "";
    }


    sc.loginGmail="";
    sc.loginPass="";

    sc.fetchData = function(){
        sc.userAllData.forEach(ele => {
            if(ele.Gmail === sc.loginGmail && ele.password === sc.loginPass){
                alert("Login successfully")
            }else{
                alert("Invalid Credentials ")
            }
        });
    }
    


}]);