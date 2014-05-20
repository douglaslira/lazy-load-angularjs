define([
	'modules/security/SecurityModule',
    'modules/security/services/AuthServices',
	'modules/dashboard/DashboardModule',
	'modules/showcase/ShowCaseModule'
	], {
		modules:[
		'ngRoute',
		'ui.router',
		'security',
		'dashboard',
		'showcase'
	]
});