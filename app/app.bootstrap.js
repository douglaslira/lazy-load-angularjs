var systemModules =  [];
var  depsAngular = [
'lib/angular-route/angular-route',
'lib/angular-ui-router/release/angular-ui-router',
'lib/angular-sanitize/angular-sanitize',
'lib/angular-resource/angular-resource',
'lib/angular-promise-tracker/promise-tracker',
'lib/angular-local-storage/angular-local-storage',
'lib/angular-gettext/dist/angular-gettext',
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
        'moment' : 'lib/momentjs/moment'
    },
    map: {
        '*': {
            'css': 'lib/require-css/js/css',
            'jquery' : 'shared/wrapper/jquery'
        }
    }
});

require(['shared/bootstrap/initialize'], function(bootstrap) {
    bootstrap.bootstrap(depsAngular);
}, function() {
    console.log("ERRO LOADING");
});