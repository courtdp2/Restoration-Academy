angular.module('RA.factories', [])
.factory('About', ['$resource', function($resource) {
    return $resource('api/about/:id', { id: '@id'}, {
    })
}])
.factory('ContactForm', ['$resource', function($resource) {
    return $resource('/api/contact/:id', { id: '@id'});

// }])
// .factory('Purchase', ['$resource', function($resource) {
//     return $resource('api/purchases/:id', {id: '@id'});
// }])
// .factory('Payment', ['$resource', function($resource) {
//     return $resource('api/payment/:id', {id: '@id'})
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