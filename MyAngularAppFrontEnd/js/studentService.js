app.factory('studentService', ['$http', '$q',
    function ($http, $q) {

        var _students = [];

        var _getStudents = function () {
            var deferred = $q.defer();

            $http.get("http://localhost:1770/api/v1/student")
              .then(function (result) {
                  angular.copy(result.data, _students);
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _saveStudent = function (student) {
            var deferred = $q.defer();

            $http.post("http://localhost:1770/api/v1/student", student)
              .then(function (result) {
                  _students.splice(0, 0, result.data);
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _updateStudent = function (student) {
            var deferred = $q.defer();

            $http.put("http://localhost:1770/api/v1/student/"+student.Id, student)
              .then(function (result) {                  
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _deleteStudent = function (student) {
            var deferred = $q.defer(); 

            $http.delete("http://localhost:1770/api/v1/student/" + student.Id)
              .then(function (result) {
                  _.remove(_students, function (std) { return std.Id == student.Id; });
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        return {
            students: _students,
            getStudents: _getStudents,
            saveStudent: _saveStudent,
            updateStudent: _updateStudent,
            deleteStudent: _deleteStudent
        }
    }
]);