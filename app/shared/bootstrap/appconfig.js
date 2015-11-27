define(['jquery'], function(jQuery) {
    return {
        init: function(configModule, onSuccess, onFailure) {
            /*// Inicialização do sistema
            jQuery.get(restPrefix + "/initconfig", function(data) {*/
                var extra_deps = [];
                
                window.system = window.system || { };
                window.system['config'] = "";
                window.system['extra_modules'] = [];

                if (onSuccess) {
                    onSuccess(extra_deps);
                }
            /*
            }).done(function() {
            }).fail(function() {
                if (onFailure){
                    onFailure();
                }
            }).always(function() {
            });*/
        },
        completePreloading: function() {
            // Finalização da requisição
        },
        installDefaultErrorHandler:  function($rootScope) {
            var $this = this;
            $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
                if (error && error.dontThrow && error.dontThrow === true) {
                    event.preventDefault();
                    if (error.onError) {
                        error.onError();
                    }
                    return;
                }
                console.log("Erro ao carregar state", toState, error);
                var detalhes = "Desconhecido";
                if (error.data || error.message) {
                    detalhes = error.data || error.message;
                }
                console.log("Erro ao carregar a página", detalhes);
            });
        }
    };
});