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
.factory('Admin', ['$resource', function($resource){
    return $resource ('api/about#collaspeOne')
}]);