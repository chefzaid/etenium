app.controller('ProjectController', [ '$scope', function($scope, $http) {
	$scope.projects = [];
	
	$scope.project = {
		add : function() {
			var projectName = $scope.name;
			var project = {
				name: projectName
			};
			$scope.projects.push(project);
			console.log($scope.projects);
			// TODO rest call to save
		}
	};
} ]);