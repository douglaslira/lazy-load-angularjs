define({
	"showcase": {
		routeDependencyId: '',
		optimize: false,
		access: "IS_LOGGEDIN",
		lazyDependencies: [
			'modules/showcase/services/ShowCaseService',
			'modules/showcase/controller/ShowCaseController'
		]
	}
});

