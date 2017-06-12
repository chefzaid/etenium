app.controller('SubcontractorController', [ '$scope', '$http', function($scope, $http) {

	activateMenuItem();
	
	$('#ex1').slider({
		formatter : function(value) {
			return 'Current value: ' + value;
		}
	});
	
	$scope.subcontractorTypeList = [];
	$scope.identifierTypeList = [];
	$scope.lotList = [];
	$scope.tradeList = [];
	
	$scope.subcontractorType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/type/all').
	        then(function(response) {
	            $scope.subcontractorTypeList = response.data;
	        });
		}
	};
	
	$scope.identifierType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/identifierType/all').
	        then(function(response) {
	            $scope.identifierTypeList = response.data;
	        });
		}
	};
	
	$scope.lot = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/lot/all').
	        then(function(response) {
	            $scope.lotList = response.data;
	        });
		}
	};
	
	$scope.trade = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/trade/all').
	        then(function(response) {
	            $scope.tradeList = response.data;
	        });
		}
	};
	
	$scope.subcontractorType.findAll();
	$scope.identifierType.findAll();
	$scope.lot.findAll();
	$scope.trade.findAll();

} ]);