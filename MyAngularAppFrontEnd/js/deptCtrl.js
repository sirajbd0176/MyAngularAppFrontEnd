'use strict'

app.controller('departmentCtrl', function ($scope, departmentService) {
    $scope.showNewEntry = false;

    //$scope.newStudent = {Name:'',Address:''};

    $scope.depatService = departmentService;
    departmentService.getDepartment();

    $scope.save = function () {

        if ($scope.newDepartment.Id > 0) { //for update
            departmentService.updateDepartment($scope.newDepartment)
            .then(function () {
                alert('Updated');
            },
            function () {
                alert('Error');
            });
        }
        else { /// saving
            departmentService.saveDepartment($scope.newDepartment)
              .then(function () {
                  alert('Saved');
              },
              function () {
                  alert('Error');
              });
        }
    }

    $scope.setForUpdate = function (dep) {
        $scope.newDepartment = dep;
        $scope.showNewEntry = true;
    }



    $scope.delete = function (dep) {
        departmentService.DeleteDepartment(dep)
            .then(function () {
                alert('Deleted');
            },
            function () {
                alert('Error');
            });
    }
});
