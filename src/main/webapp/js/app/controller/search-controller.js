app.controller('SearchController', [ '$scope', '$http', function($scope, $http) {

	activateMenuItem();
	$('#subcontractors').select2({ width: '400px' });
	
	$scope.showTradesOfLot = [];
	
	$scope.lotList = [];
	$scope.tradeList = [];
	$scope.subcontractorList = [];
	
	$scope.lot = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/lot/all').
	        then(function(response) {
	            $scope.lotList = response.data;
	        });
		},
		check : function(id) {
			$scope.showTradesOfLot[id] = $scope.showTradesOfLot[id] ? !$scope.showTradesOfLot[id] : true;
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
	
	$scope.subcontractor = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/all').
	        then(function(response) {
	            $scope.subcontractorList = response.data;
	        });
		}
	};
	
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.subcontractor.findAll();
	
} ]);