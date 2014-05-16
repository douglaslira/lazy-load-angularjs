define(function() {
    return function makeModuleLazyLoadable(moduleId) {
        var module = angular.module(moduleId);
        module.config(function($controllerProvider, $compileProvider, $filterProvider, $provide){
            module.controller = $controllerProvider.register;
            module.directive  = $compileProvider.directive;
            module.filter     = $filterProvider.register;
            module.factory    = $provide.factory;
            module.service    = $provide.service;
            module.provide    = $provide;
        });
    }
});
