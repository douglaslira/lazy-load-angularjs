define(['modules/security/SecurityModule'], function(app) {

  app.factory('AuthStateService', ['$rootScope', function($rootScope) {

    var _loggedUser = null;
    var  _currentToken = null;

    var supportSessionStorage = false;

    try {
      supportSessionStorage = ('sessionStorage' in window && window['sessionStorage'] !== null);
    } catch (e) {
      supportSessionStorage = false;
    }

    var authState = null;
    if (supportSessionStorage) {
      var authState = JSON.parse(window.sessionStorage.getItem("system.auth.state"));
      if (authState) {
        _loggedUser = authState[0];
        _currentToken = authState[1];
        $rootScope.$broadcast("LOGIN_UPDATE", _loggedUser );
      }
    }

    authState = null;


    var ret = {
      _getToken: function() {
        return _currentToken;
      },
      _getState: function() {
        return [ _loggedUser, _currentToken ];
      },
      persistState: function() {
        if (supportSessionStorage) {
          if (_loggedUser) {
            var state = JSON.stringify([ _loggedUser, _currentToken ]);
            window.sessionStorage["system.auth.state"] = state;
          } else {
            window.sessionStorage["system.auth.state"] = null;
            delete window.sessionStorage["system.auth.state"];
          }
        }
      },
      clearState: function() {
        _loggedUser = null;
        _currentToken = null;
      },
      getCurrentUser: function() {
        return _loggedUser;
      },
      setUser: function (username, token) {
        _loggedUser = username;
        _currentToken = token;
      }
    };
    return ret;
  }]);

  app.factory('AuthService', ['AuthStateService', '$q', '$http', '$rootScope', function(AuthStateService, $q, $http, $rootScope) {
    var ret = {
      login: function(username, password) {
        var deferred = $q.defer();

        $http.post(restPrefix + "/auth/login",{"username": username, "password": password}).success(function(data) {
          
          if (data && data['status'] == 'ok') {

            // TODO: Implementar metodo seguro de autenticacao
            var _currentToken = "SS " + username;
            var _loggedUser = username;

            AuthStateService.setUser(_loggedUser,_currentToken);
            AuthStateService.persistState();

            // Broadcast "LOGIN_UPDATE"
            $rootScope.$broadcast("LOGIN_UPDATE", username);
            deferred.resolve(username);

          } else {
            deferred.reject("fail");
          }

        }).error(function(data, status, headers, config) {
          deferred.reject(status);
        });

        return deferred.promise;
      },

      logout: function() {
        AuthStateService.clearState();
        AuthStateService.persistState();
        $rootScope.$broadcast("LOGIN_UPDATE", null );
      }

    };

    return ret;
  }]);

  app.config(['$httpProvider', function($httpProvider) {
    var httpAuthInterceptor = [ 'AuthStateService', function(AuthStateService) {
      return {
        // optional method
        'request': function(config) {
          // do something on success
          var token = AuthStateService._getToken();
          if (token) {
            config.headers['Authorization'] = token+":OK";
          }
          return config || $q.when(config);
        }
      }
    }];

    $httpProvider.interceptors.push(httpAuthInterceptor);
  }]);

});
