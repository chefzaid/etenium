
var app = angular.module('app', ['ngRoute']);

app.config(
	function($routeProvider) {
		$routeProvider.
		// Main routes
		when('/companies', {
			templateUrl: 'views/companies.html',
			controller: 'CompanyController'
		}).
		when('/trades', {
			templateUrl: 'views/trades.html',
			controller: 'TradeController'
		}).
		otherwise({
			redirectTo: '/companies'
		});
});

app.run(function ($rootScope) {
	// REST API Endpoint:
	$rootScope.API_URL = 'http://localhost:8080/etenium/api/';
});