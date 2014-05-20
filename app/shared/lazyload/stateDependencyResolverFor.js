define(function(){

  var isFirstRun = true;

  return function stateDependencyResolverFor(stateConfig) {
    return {resolver:['$q','$rootScope','$location','$timeout', 'AuthStateService', function($q, $rootScope, $location, $timeout, AuthStateService) {

      var deferred = $q.defer();

      if (stateConfig.access) {
        if (stateConfig.access === "IS_LOGGEDIN") {
          // TODO
          if (!AuthStateService.getCurrentUser()) {
           var onError = function() {
             $timeout(function() {
               $location.path("/login");
             });
           }
           deferred.reject({ to: "/login", type: "authneeded", dontThrow: true, onError: onError });
           $location.path("/login");
           return deferred.promise;
         }
       }
     }

     if(isFirstRun || stateConfig.optimize) {
      require(stateConfig.lazyDependencies, function() {
        $rootScope.$apply(function() {
          isFirstRun = false;
          deferred.resolve();
        });
      }, function (err) {
        deferred.reject(err);
      });

    } else {

      require(stateConfig.lazyDependencies, function() {
          $rootScope.$apply(function() {
            deferred.resolve();
          });
        }, function (err) {
          deferred.reject(err);
        });
      }

      return deferred.promise;
    }]};
  }
});