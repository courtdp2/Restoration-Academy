angular.module('RA',[
    'ngRoute',
    'ngResource',
    'RA.factories',
    'RA.controllers',
    'RA.services',
    'RA.directives'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    // This first route is temporary for testing and will be removed later
    .when ('/testview', {
        templateUrl: 'views/testview.html'
    })
    
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'About'
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
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    // .when('/logout', {
    //     templateUrl: 'views/adminview.html',
    //     controller: 'AdminListController'
    // })
    .otherwise({
        redirectTo: '/'
    })
}]);
