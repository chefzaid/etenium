var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.
	// Main routes
	when('/subcontractors', {
		templateUrl : 'views/subcontractors.html',
		controller : 'SubcontractorController'
	}).
	when('/projects', {
		templateUrl : 'views/projects.html',
		controller : 'ProjectController'
	}).
	when('/search', {
		templateUrl : 'views/search.html',
		controller : 'SearchController'
	}).
	otherwise({
		redirectTo : '/search'
	});
});

app.run(function($rootScope) {
	
});