'use strict'

app.controller('courseCtrl', function ($scope, courseService, departmentService) {
    $scope.showNewEntry = false;

    //$scope.newStudent = {Name:'',Address:''};

    $scope.corService = courseService;
    $scope.depService = departmentService;
    courseService.getCourses();
    departmentService.getDepartment();
    
 
    

    $scope.save = function (){
        
        if ($scope.newCourse.Id > 0) { //for update
            courseService.updateCourse($scope.newCourse)
            .then(function () {
                alert('Updated');
                $scope.newCourse = angular.copy($scope.master);
            },
            function () {
                alert('Error');
            });
        }
        else { /// saving
            courseService.saveCourse($scope.newCourse)
              .then(function () {
               
                  alert('Saved');
                  //document.getElementById('txtcorseNa').value = '';
                 // location.reload();
                  $scope.newCourse = angular.copy($scope.master);
                  //$scope.NewCourseForm.$setPristine();
              },
              function () {
                  alert('Error');
              });
        }
    }


    $scope.setForUpdate = function (cor) {
        $scope.newCourse = cor;
        $scope.showNewEntry = true;
    }


    
    $scope.delete = function (cor) {
        courseService.deleteCourse(cor)
            .then(function () {
                alert('Deleted');
            },
            function () {
                alert('Error');
            });
    }
});

app.filter('customUpperCase', function ($filter) {

    var innerFunction= function (input) {
        var result ='~~~~~~~'+ $filter('uppercase')(input);
        return result;
    }
    
    return innerFunction;
});

app.filter('constantVal', function () {

    var innerFunction = function (input) {
        var result = 'constant val';
        return result;
    }

    return innerFunction;
});

app.filter('iif', function () {

    var innerFunction = function (input,trueValue,falseValue) {
        var result = input ? trueValue : falseValue;
        return result;
    }

    return innerFunction;
});

