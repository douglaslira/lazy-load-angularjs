var systemModules =  [];
var  depsAngular = [
'library/angular-route/angular-route',
'library/angular-ui-router/release/angular-ui-router',
'library/angular-sanitize/angular-sanitize',
'library/angular-resource/angular-resource',
'library/angular-promise-tracker/promise-tracker',
'library/angular-local-storage/angular-local-storage',
'library/angular-gettext/dist/angular-gettext',
'app.modules'
];


require.onError = function(err) {
    console.log(err.requireType);
    if (err.requireType === 'timeout') {
        console.log('modules: ' + err.requireModules);
    }
    return err;
};

require.config({
    paths: {
    },
    shim: {
    },
    paths: {
        'moment' : 'library/momentjs/moment'
    },
    map: {
        '*': {
            'css': 'library/require-css/js/css',
            'jquery' : 'shared/wrapper/jquery'
        }
    }
});

require(['shared/bootstrap/initialize'], function(bootstrap) {
    bootstrap.bootstrap(depsAngular);
}, function() {
    console.log("ERRO LOADING");
});