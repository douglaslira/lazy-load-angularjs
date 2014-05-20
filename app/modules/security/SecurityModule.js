define(['../../shared/lazyload/stateDependencyResolverFor', 'modules/security/SecurityModule.config', '../../shared/lazyload/makeModuleLazyLoadable'], function(stateDependencyResolverFor, stateConfig, makeModuleLazyLoadable) {

    var mod = angular.module('security', ['ngRoute', 'ui.router', 'gettext', 'LocalStorageModule']);

    makeModuleLazyLoadable('security');

    mod.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "modules/security/views/login.tpl.html",
            resolve:  stateDependencyResolverFor(stateConfig)
        });
    }]);

    return mod;
});