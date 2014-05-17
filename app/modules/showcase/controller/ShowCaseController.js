define(['modules/showcase/ShowCaseModule'], function(app) {

	app.controller('ShowCaseController', ['$scope', '$state', '$stateParams', '$q', 'promiseTracker', 'ShowCaseService', function($scope,$state,$stateParams,$q,promiseTracker,ShowCaseService) {

		$scope.nome = "Douglas Lira"

    }]);

});