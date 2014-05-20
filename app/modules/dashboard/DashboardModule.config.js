define({
	"dashboard": {
		routeDependencyId: '',
		optimize: false,
		access: "IS_LOGGEDIN",
		lazyDependencies: [
			'modules/dashboard/services/DashboardService',
			'modules/dashboard/controller/DashboardController'
		]
	}
});

