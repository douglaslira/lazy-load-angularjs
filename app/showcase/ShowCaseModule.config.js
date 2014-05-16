define({
	"showcase": {
		routeDependencyId: '',
		optimize: false,
		access: "IS_LOGGEDIN",
		lazyDependencies: [
			'showcase/services/ShowCaseService',
			'showcase/controller/ShowCaseController'
		]
	}
});

