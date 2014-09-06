'use strict'

app.controller('courseCtrl', function ($scope, courseService) {
    $scope.showNewEntry = false;

    //$scope.newStudent = {Name:'',Address:''};

    $scope.corService = courseService;
    courseService.getCourses();

    $scope.save = function (){

        //courseService.saveCourse($scope.newCourse)
        //.then(function () {
        //    alert('Saved');
        //},
        //function () {
        //    alert('Error');
        //});

    
        if ($scope.newCourse.Id > 0) { //for update
            courseService.updateCourse($scope.newCourse)
            .then(function () {
                alert('Updated');
            },
            function () {
                alert('Error');
            });
        }
        else { /// saving
            courseService.saveCourse($scope.newCourse)
              .then(function () {
                  alert('Saved');
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



});
