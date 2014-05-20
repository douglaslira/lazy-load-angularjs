define(['modules/security/SecurityModule'], function(app) {

    app.controller('LoginController', ['$scope', '$state', '$q', 'AuthService', function($scope, $state, $q, AuthService) {

        $scope.userinfo = {};

        $scope.login = function(form) {
            if (form.$invalid) {
                $scope.status = 'error';
                return false;
            } else {
                AuthService.login($scope.userinfo.login, $scope.userinfo.senha).then(function(data) {
                    $scope.status = null;
                    $state.go("dashboard");
                }, function(error) {
                    $scope.status = 'erro';
                });

                return true;
            }
        }
    }]);

});