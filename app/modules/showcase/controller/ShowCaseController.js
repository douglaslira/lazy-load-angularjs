define(['modules/showcase/ShowCaseModule'], function(app) {

	app.controller('ShowCaseController', ['$scope', '$state', '$stateParams', '$q', 'promiseTracker', 'AuthService', 'AuthStateService', 'ShowCaseService', function($scope,$state,$stateParams,$q,promiseTracker, AuthService, AuthStateService, ShowCaseService) {

		$scope.nome = "Douglas Lira";

		$scope.logout = function(){
			AuthService.logout();
			$state.go("login");
		}

    }]);

});