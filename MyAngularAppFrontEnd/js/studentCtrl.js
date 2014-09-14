'use strict'

app.controller('studentCtrl', function ($scope, $filter, studentService, departmentService) {

    $scope.showNewEntry = false;

    $scope.stdService = studentService;
    studentService.getStudents();
    $scope.depService = departmentService;

    $scope.select2Options = {
        allowClear: true,
        multiple:true,
        data: {}
    };

    departmentService.getDepartment()
        .then(
            function (result) {
                var newDeptList = [];

                _.forEach(result.data, function (dept) {
                    newDeptList.push({ id: dept.Id, text: dept.Name });
                });
                $scope.select2Options.data.results = newDeptList;
            },
            function (err) {

            }
        );    

    $scope.save = function () {
        
        //var Depts = [];
        //_.forEach($scope.newStudent.DepID, function (dept) {
        //    Depts.push({Id:dept.id,Name:dept.text});
        //});
        //$scope.newStudent.Depts = Depts;
        //$scope.newStudent.BirthDate = moment($scope.newStudent.BirthDate).format('DD-MM-YYYY');
        //$scope.newStudent.BirthDate = moment($scope.newStudent.BirthDate);
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

    $scope.MySearch = function () {
        $scope.myResult = $filter('orderBy')($scope.stdService.students, $scope.search);
       
    }

    $scope.NameSearch = function () {

        $scope.Uppercase= $filter('uppercase')()
    }

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };
});
