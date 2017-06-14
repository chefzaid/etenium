app.controller('SubcontractorController', [ '$scope', '$http', function($scope, $http) {

	activateMenuItem();
	
	$scope.avgRating = "-";
	$scope.showTradesOfLot = [];
	
	$scope.subcontractorTypeList = [];
	$scope.identifierTypeList = [];
	$scope.lotList = [];
	$scope.tradeList = [];
	$scope.projectList = [];
	
	$scope.subcontractor = {
		id : 0,
		type : '',
		idenitifier : '',
		identifierType : '',
		trades : [],
		contacts : [],
		ratings : []
		
	};
	
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
		},
		check : function(id) {
			$scope.showTradesOfLot[id] = true;
		}
	};
	
	$scope.trade = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/trade/all').
	        then(function(response) {
	            $scope.tradeList = response.data;
	        });
		},
		add : function() {
			$scope.subcontractor.trades.push($scope.trades);
		}
	};
	
	$scope.project = {
		findAll : function() {
			$http.get(API_URL + '/project/all').
	        then(function(response) {
	            $scope.projectList = response.data;
	        });
		}
	};
	
	$scope.contact = {
		add : function() {
			var newContact = $.extend(true, {}, $scope.ct);
			$scope.subcontractor.contacts.push(newContact);
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
		}
	};

	$scope.subcontractorType.findAll();
	$scope.identifierType.findAll();
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.project.findAll();

} ]);