let myapp = angular.module("Myapp",[]);

let mycontroller = function($scope){

    $scope.messsage = "hello world";
}

myapp.controller("Mycontroller", mycontroller );