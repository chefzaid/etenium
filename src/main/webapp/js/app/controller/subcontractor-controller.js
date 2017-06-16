app.controller('SubcontractorController', [ '$scope', '$http', function($scope, $http) {

	activateMenuItem();	
	$(document).ready(function(){
	    $('[data-toggle="popover"]').popover(); 
	});
	
	$scope.avgRating = "-";
	$scope.showTradesOfLot = [];
	
	$scope.subcontractorTypeList = [];
	$scope.identifierTypeList = [];
	$scope.lotList = [];
	$scope.tradeList = [];
	$scope.projectList = [];

	$scope.subcontractor = {
		id : 0,
		name : '',
		type : '',
		identifier : '',
		identifierType : '',
		trades : [],
		contacts : [],
		ratings : [],
		
		save : function() {
			for(var trade of $scope.tradeList){
				if(trade.checked){
					$scope.subcontractor.trades.push(trade);
				}
			}
			$http.post(API_URL + '/subcontractor', $scope.subcontractor).
	        then(function(response) {
	        	//$scope.subcontractor.findAll();
	        	$scope.subcontractor = {}; // Clear inputs
	        });
		},
	};
	
	$scope.subcontractorType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/type/all').
	        then(function(response) {
	            $scope.subcontractorTypeList = response.data;
	            $('#subcontractorType').select2({ width: '200px' });
	        });
		}
	};
	
	$scope.identifierType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/identifierType/all').
	        then(function(response) {
	            $scope.identifierTypeList = response.data;
	            $('#identifierType').select2({ width: '100px' });
	        });
		}
	};
	
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
	
	$scope.project = {
		findAll : function() {
			$http.get(API_URL + '/project/all').
	        then(function(response) {
	            $scope.projectList = response.data;
	            $('#ratingProject').select2({ width: '400px' });
	        });
		}
	};
	
	$scope.contact = {
		add : function() {
			var newContact = $.extend(true, {}, $scope.ct);
			$scope.subcontractor.contacts.push(newContact);
			$scope.ct = {};
		},
		remove : function(id) {
			$scope.subcontractor.contacts.splice(index, 1);
		}
	};
	
	$scope.rating = {
		add : function() {
			var newRating = $.extend(true, {}, $scope.rt);
			$scope.subcontractor.ratings.push(newRating);
			var total = 0;
			for(var rating of $scope.subcontractor.ratings){
				total += parseInt(rating.stars);
			}
			$scope.avgRating = total / $scope.subcontractor.ratings.length + " / 5";
			$scope.rt = {};
		},
		remove : function(index) {
			$scope.subcontractor.ratings.splice(index, 1);
		}
	};

	$scope.subcontractorType.findAll();
	$scope.identifierType.findAll();
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.project.findAll();

} ]);