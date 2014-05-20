define(['shared/lazyload/makeModuleLazyLoadable', 'app.settings', 'app.config', 'shared/bootstrap/appconfig'], function(makeModuleLazyLoadable, settings, config, appconfig) {

    var appModules = config.modules;
    if (window.system && window.system['extra_modules'] && window.system['extra_modules'].length) {
        appModules =  config.modules.concat(window.system['extra_modules']);
    }
    var app = angular.module('app', appModules);
    angular.module('LocalStorageModule',[]).value('prefix', settings.localStoragePrefix);
    makeModuleLazyLoadable('app');

    app.config(function($urlRouterProvider) {
        if(settings.defaultRoutePath !== undefined) {
            $urlRouterProvider.otherwise(settings.defaultRoutePath);
        }
    });

    app.run(function ($rootScope, $state, $stateParams, $templateCache) {

        $rootScope.$on('$stateChangeSuccess', function() {
            $templateCache.removeAll();
        });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.restPrefix = restPrefix;

        appconfig.installDefaultErrorHandler.call(appconfig,$rootScope);

        appconfig.completePreloading.call(appconfig);

    });

    return app;
});