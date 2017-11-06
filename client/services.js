angular.module('RA.services', [])
.service('UserService', ['$http', '$location', function($http, $location) {
    let currentUser;

    this.isLoggedIn = function() {
        if (currentUser) {
            return true;
        } else {
            return false;
        }
    }

    this.loginRedirect = function(){
        let current = $location.path();
        $location.path('/login').search('dest', current);
    }

    this.login = function(email, password) {
        return $http({
            method: 'POST',
            url: '/api/admins/login',
            data: {
                email: email,
                password: password
            }
        }).then((response) => {
            currentUser = response.data;
            return currentUser;
        });
    }

    this.logout = function() {
        return $http({
            method: 'GET',
            url: '/api/admins/list'
        }).then(() => {
            currentUser = undefined;
        });
    }

    this.me = function() {
        if (currentUser) {
            return Promise.resolve(currentUser);
        } else {
            return $http({
                method: 'GET',
                url: '/api/admin/login'
            }).then((response) => {
                currentUser = response.data;
                return currentUser;
            });
        }
    }
}]);