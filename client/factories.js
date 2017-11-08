angular.module('RA.factories', [])
.factory('About', ['$resource', function($resource) {
    return $resource('api/about/:id', { id: '@id'}, {
    })
}])
.factory('ContactForm', ['$resource', function($resource) {
    return $resource('/api/contact/:id', { id: '@id'});

}])
.factory('Elementary', ['$resource', function($resource){
    return $resource ('api/about/elementaryteachers', {id: '@id'})
}])
.factory('Highschool', ['$resource', function($resource){
    return $resource ('api/about/highschoolteachers', {id: '@id'})
}])
.factory('Board', ['$resource', function($resource){
    return $resource ('api/about/board-of-directors', {id: '@id'})
}])
.factory('Admins', ['$resource', function($resource){
    return $resource ('api/admins/:id', {id: '@id'})
}])
.factory('Teachers', ['$resource', function($resource){
    return $resource ('api/teachers/:id', {id: '@id'})
}])
