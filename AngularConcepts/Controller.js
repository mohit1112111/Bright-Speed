var app = angular.module('app', []);
app.controller('SignupController', function ($scope, $http, $location) {
    $scope.signup = (user) => {

        //   $http.post('http://localhost:3000/users', user)
        //     .then((response) => {
        //       console.log("Registration is successfull")
        //       $location.path('/login');
        //     })
        //     .catch((error) => {
        //       console.error('Error in signing up:', error);
        //     });
        console.log('Username:', user.username);
        console.log('Email:', user.email);
        console.log('Password:', user.password);
    };

})

app.controller('NavController', function($scope) {
    $scope.showMenu = false;
  
    $scope.toggleMenu = function() {
      $scope.showMenu = !$scope.showMenu;
    };
  });