app.controller('SubcontractorController', [ '$scope', function($scope, $http) {

	$('#ex1').slider({
		formatter : function(value) {
			return 'Current value: ' + value;
		}
	});

} ]);