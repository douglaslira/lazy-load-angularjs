define(['modules/dashboard/DashboardModule'], function(app) {

	app.controller('DashboardController', ['$scope', '$state', '$stateParams', '$q', 'promiseTracker', 'AuthService', 'AuthStateService', 'DashboardService', function($scope, $state, $stateParams, $q, promiseTracker, AuthService, AuthStateService, DashboardService) {

		$scope.nome = "Douglas Lira";
		
		$scope.logout = function(){
			AuthService.logout();
			$state.go("login");
		}

    }]);

});