app.controller('SubcontractorController', [ '$scope', function($scope, $http) {

	activateMenuItem();
	
	$('#ex1').slider({
		formatter : function(value) {
			return 'Current value: ' + value;
		}
	});

} ]);