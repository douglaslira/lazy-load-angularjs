define(['library/angular/angular', 'shared/bootstrap/appconfig'], function(app, appconfig) {
    return {
        bootstrap: function(depsAngular, configModule) {

            var dobootstrap = function () {
                require(depsAngular, function (ang) {
                    angular.element(document).ready(function () {
                        angular.bootstrap(document,['app']);
                    });
                }, function(error) {
                    console.log(error.message, "01");
                });
            };

            appconfig.init(configModule, function (newDeps) {
                if (newDeps && newDeps.length) {
                    require(newDeps, function() {
                        dobootstrap();
                    }, function(error) {
                        console.log(error.message, "02");
                    });
                } else {
                    dobootstrap();
                }
            }, function () {
                console.log("Erro ao realizar a chamada 'initConfig'.");
            });
        }
    }
});