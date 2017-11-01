angular.module('RA.directives', [])
.directive('mainNavigation', [function() {
    return {
        templateUrl: 'directives/navbar.html',
        controller: 'navController',
        restrict: 'E',
        scope: {
            activePage: '='
        }
    };
}])
.directive('footerNavigation', [function() {
    return {
        templateUrl: 'directives/footer.html',
        restrict: 'E',
        scope: {
            activePage: '='
        }
    };
}]);