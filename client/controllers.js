angular.module('RA.controllers', [])

.controller('About', ['$scope', '$routeParams','Admins', 'Elementary', 'Highschool', 'Board',  function ($scope, $routeParams, Admins, Elementary, Highschool, Board) {
$scope.admins = Admins.query();
$scope.elementaryteachers = Elementary.query();
$scope.highschoolteachers = Highschool.query();
$scope.boardMembers = Board.query();

}])

.controller('ContactController', ['$scope', 'ContactForm', function ($scope, ContactForm) {
    $scope.send = function () {
        let contact = new ContactForm({
            from: $scope.email,
            message: $scope.message
        });

        contact.$save(function () {
            alert('Thank you for you message. We will get back with you shortly')
        }, function (err) {
            console.log(err);
        });
    }
}])

.controller('ProgramController', ['$scope', 'Programs', function ($scope, Programs) {
    let navSelector = '#toc';
    let $myNav = $(navSelector);
    Toc.init($myNav);
    $('body').scrollspy({
        target: navSelector
    });
}]);

    
