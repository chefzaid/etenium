var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	$routeProvider.
	// Main routes
	when('/subcontractors', {
		templateUrl : 'views/subcontractors.html'
	}).
	when('/subcontractors/:id', {
		templateUrl : 'views/subcontractors.html'
	}).
	when('/projects', {
		templateUrl : 'views/projects.html'
	}).
	when('/search', {
		templateUrl : 'views/search.html'
	}).
	otherwise({
		redirectTo : '/search'
	});
});

app.run(function($rootScope) {
	
});