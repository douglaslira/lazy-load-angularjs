define(['showcase/ShowCaseModule'], function(app) {
	app.factory('ShowCaseService', ['$q', '$timeout','$http', '$rootScope', function($q, $timeout,$http, $rootScope) {
		var apiData = {
			getResults: function(start, maxResult) {
				var deferred = $q.defer();
				var data = [];

				for (var i = 0; i < maxResult; i++) {
					data.push({"id": i});
        		}

				deferred.resolve(data);
				return deferred.promise;
			}
		};
		return apiData;
	}]);
});
