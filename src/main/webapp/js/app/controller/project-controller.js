app.controller('ProjectController', [ '$scope', '$http', function($scope, $http) {
	var API_URL = 'http://localhost:8080/etenium/api';
	$scope.projectsList = [];
	
	$scope.project = {
		findAll : function() {
			return $http({
	            method : 'GET',
	            url : API_URL + '/project/all',
	        });
		},
		save : function() {
			var projectName = $scope.name;
			var project = {
				name: projectName
			};
			$scope.projectsList.push(project);
			return $http({
		        method : 'POST',
		        url : API_URL + '/project',
		        data : {
		            name : projectName
		        }
		    });
		},
		deleteProject : function() {
			return $http({
	            method : 'DELETE',
	            url : API_URL + '/project',
	        });
		}
	};
	
	$scope.projects = $scope.project.findAll();
} ]);