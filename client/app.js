let app = angular.module('RA',[
    'ngRoute',
    'ngResource',
    // ,'RA.Factory',
    // 'RA.controllers'
    // 'RA.services',
    'RA.directives'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .when('/programs', {
        templateUrl: 'views/programs.html',
        controller: 'ProgramsController'
    })
    .when('/apply', {
        templateUrl: 'views/apply.html',
        controller: 'ApplyController'
    })
    .when('/contact', {
        templateUrl: 'views/conctact.html',
        controller: 'ContactController'
    })
    .when('/getinvolved', {
        templateUrl: 'views/getinvolved.html',
        controller: 'GetinvolvedController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);
