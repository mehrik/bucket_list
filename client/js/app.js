var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/partials/login.html',
        controller: 'UsersController as UC'
    })
    .when('/dashboard', {
        templateUrl: 'views/partials/dashboard.html',
        controller: 'BucketItemsController as BIC'
    })
    .when('/user/:id', {
        templateUrl: 'views/partials/user.html',
        controller: 'UsersController as UC'
    });
});