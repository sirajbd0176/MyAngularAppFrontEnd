app.factory('departmentService', ['$http', '$q',
    function ($http, $q) {

        var _departments = [];

        var _getDepartment = function () {
            var deferred = $q.defer();

            $http.get("http://localhost:1770/api/v1/department")
              .then(function (result) {
                  angular.copy(result.data, _departments);
                  deferred.resolve(result);
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _saveDepartment = function (department) {
            var deferred = $q.defer();

            $http.post("http://localhost:1770/api/v1/Department", department)
              .then(function (result) {
                  _departments.splice(0, 0, result.data);
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };


        var _updateDepartment = function (deprtment) {
            var deferred = $q.defer();

            $http.put("http://localhost:1770/api/v1/Department/" + deprtment.Id, deprtment)
              .then(function (result) {
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };


        var _DeleteDepartment = function (department)
        {

            var deferred = $q.defer();

            $http.delete("http://localhost:1040/api/v1/department/" + department.Id)
              .then(function (result) {
                  _.remove(_departments, function (dep) { return dep.Id == department.Id; });
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;


        }




        return {
            departments: _departments,
            getDepartment: _getDepartment,
            saveDepartment: _saveDepartment,
            updateDepartment: _updateDepartment,
            DeleteDepartment: _DeleteDepartment
        }
    }
]);