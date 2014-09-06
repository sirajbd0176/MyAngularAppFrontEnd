'use strict'

app.controller('studentCtrl', function ($scope, studentService) {
    $scope.showNewEntry = false;

    $scope.stdService = studentService;
    studentService.getStudents();

    $scope.save = function () {
        if ($scope.newStudent.Id > 0) { //for update
            studentService.updateStudent($scope.newStudent)
            .then(function () {
                alert('Updated');
            },
            function () {
                alert('Error');
            });
        }
        else {  //for save
            studentService.saveStudent($scope.newStudent)
            .then(function () {
                alert('Saved');
            },
            function () {
                alert('Error');
            });
        }

    }

    $scope.setForUpdate = function (std) {
        $scope.newStudent = std;
        $scope.showNewEntry = true;        
    }

    $scope.delete = function (std) {
        studentService.deleteStudent(std)
            .then(function () {
                alert('Deleted');
            },
            function () {
                alert('Error');
            });
    }
});
