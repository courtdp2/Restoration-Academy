let app = angular.module('RA',[
    'ngRoute',
    'ngResource'
    // ,'RA.Factory',
    // 'RA.controllers'
    // 'RA.services',
    // 'RA.directives'
])
.config[('$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
})]
