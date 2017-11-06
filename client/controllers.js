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
}])

.controller('LoginController', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {
    UserService.me()
    .then((me) => {
        redirect();
    });

    function redirect() {
        // e.g. http://localhost:3000/login?dest=/users
        // then the variable dest would receive /users as its value
        let dest = $location.search().dest;
        if (!dest) {
            dest = '/';
        }
        // e.g. Go to the destination, and then remove the 'dest' search parameter (query parameter)
        // e.g. Remove the ?dest=/users
        $location.replace().path(dest).search('dest', null);
    }

    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
        .then((user) => {
            redirect();
        });
    }
}])
.controller('AdminListController', ['$scope', 'User', function($scope, User) {
    $scope.admins = Admins.query();
}])

.controller('LogoutController', ['UserService', '$location', function( UserService, $location) {
    UserService.logout()
    .then(() => {
        $location.replace().path('/');

    });
}]);

    
