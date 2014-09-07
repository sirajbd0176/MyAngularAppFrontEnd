app.factory('courseService', ['$http', '$q',
    function ($http, $q) {

        var _courses = [];

        var _getCourses = function () {
            var deferred = $q.defer();

            $http.get("http://localhost:1770/api/v1/course")
              .then(function (result) {
                  angular.copy(result.data, _courses);
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _saveCourse = function (courses) {
            var deferred = $q.defer();

            $http.post("http://localhost:1770/api/v1/course", courses)
              .then(function (result) {
                  _courses.splice(0, 0, result.data);
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        var _updateCourse = function (course) {
            var deferred = $q.defer();

            $http.put("http://localhost:1770/api/v1/course/" + course.Id, course)
              .then(function (result) {
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };



        var _deleteCourse = function (course) {
          var deferred = $q.defer();

            $http.delete("http://localhost:1770/api/v1/course/" + course.Id)
              .then(function (result) {
                  _.remove(_courses, function (cor) { return cor.Id == course.Id; });
                  deferred.resolve();
              },
              function () {
                  // Error
                  deferred.reject();
              });

            return deferred.promise;
        };

        return {
            courses: _courses,
            getCourses: _getCourses,
            saveCourse: _saveCourse,
            updateCourse: _updateCourse,
            deleteCourse: _deleteCourse
        }
    }
]);