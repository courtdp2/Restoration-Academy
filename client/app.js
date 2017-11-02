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
    .when('/academics', {
        templateUrl: 'views/academics.html',
        controller: 'AcademicsController'
    })
    .when('/studentlife', {
        templateUrl: 'views/studentlife.html',
        controller: 'StudentlifeController'
    })
    .when('/newsandevents', {
        templateUrl: 'views/newsandevents.html',
        controller: 'NewsandeventsController'
    })
    .when('/getinvolved', {
        templateUrl: 'views/getinvolved.html',
        controller: 'GetinvolvedController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);
