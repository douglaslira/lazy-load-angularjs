define(['../../shared/lazyload/stateDependencyResolverFor', 'modules/dashboard/DashboardModule.config','../../shared/lazyload/makeModuleLazyLoadable'], function(stateDependencyResolverFor, stateConfig, makeModuleLazyLoadable) {

    var mod = angular.module('dashboard', ['ngRoute', 'ui.router', 'ajoslin.promise-tracker', 'ngSanitize']);

    makeModuleLazyLoadable('dashboard');

    mod.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
    
    $stateProvider
        .state('dashboard', {	
            url: "/dashboard",
            templateUrl: "modules/dashboard/views/dashboard.tpl.html",
            resolve:  stateDependencyResolverFor(stateConfig.dashboard)
        })
    }]);
    return mod;
    
});