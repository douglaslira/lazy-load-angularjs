define(['modules/dashboard/DashboardModule'], function(app) {
	app.factory('DashboardService', ['$q', '$timeout','$http', '$rootScope', function($q, $timeout,$http, $rootScope) {
		var apiData = {
			func: function() {
				return "OK";
			}
		};
		return apiData;
	}]);
});
