let myapp = angular.module("Myapp", []);

let mycontroller = function ($scope) {

    $scope.message = "hello world";
}

myapp.controller("Mycontroller", mycontroller);

let JSONController = function ($scope) {

    let Student = {
        FirstName: "Sandeep",
        LastName: "Katrevula",
        Email: "s534965@nwmissouri.edu"
    }

    $scope.Student = Student;
}

myapp.controller("Student", JSONController)