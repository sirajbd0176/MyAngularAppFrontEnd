'use strict'

app.controller('courseCtrl', function ($scope, Service) {
    $scope.showNewEntry = false;

    //$scope.newStudent = {Name:'',Address:''};

    $scope.corService = courseService;
    courseService.getCourses();

    //$scope.save = function () {

    //    studentService.saveStudent($scope.newStudent)
    //    .then(function () {
    //        alert('Saved');
    //    },
    //    function () {
    //        alert('Error');
    //    });

    //}
});
