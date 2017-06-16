app.controller('ProjectController', [ '$scope', '$http', function($scope, $http) {
	
	activateMenuItem();
	
	$scope.projectsList = [];
	$scope.project = {
		findAll : function() {
			$http.get(API_URL + '/project/all').
	        then(function(response) {
	            $scope.projectsList = response.data;
	        });
		},
		findById : function(id) {
			$http.get(API_URL + '/project/' + id).
	        then(function(response) {
	            $scope.prj = response.data;
	        });
		},
		save : function() {
			$http.post(API_URL + '/project', $scope.prj).
	        then(function(response) {
	        	$scope.project.findAll();
	        	$scope.prj = {};
	        });
		},
		deleteProject : function(id) {
			$http.delete(API_URL + '/project/' + id).
	        then(function(response) {
	        	$scope.project.findAll();
	        });
		}
	};
	
	$scope.project.findAll();
} ]);