/// <reference path="../templates/courselist.html" />
/// <reference path="../templates/courselist.html" />
/// <reference path="../templates/courselist.html" />
/// <reference path="../templates/departList.html" />
/// <reference path="../templates/departList.html" />
'use strict'

var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        controller: "indexCtrl",
        templateUrl: "/templates/indexView.html"
    });

    $routeProvider.when("/students", {
        controller: "studentCtrl",
        templateUrl: "/templates/studentList.html"
    });

    $routeProvider.when("/courses", {
        controller: "courseCtrl",
        templateUrl: "/templates/courselist.html"

    });
    $routeProvider.when("/departments", {
        controller: "departmentCtrl",
        templateUrl: "/templates/departmentList.html"

    });


    $routeProvider.when("/newstudent", {
        controller: "editRegionController",
        templateUrl: "/templates/region/editRegionView.html"
    });

    $routeProvider.otherwise({ redirectTo: "/" });
}]);