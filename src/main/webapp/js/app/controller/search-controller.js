app.controller('SearchController', [ '$scope', '$http', function($scope, $http) {

	activateMenuItem();
	$('#subcontractors').select2();
	
	$scope.showTradesOfLot = [];
	
	$scope.lotList = [];
	$scope.tradeList = [];
	$scope.subcontractorList = [];
	$scope.searchResults = [];
	
	$scope.lot = {
		findAll : function() {
			$http.get(API_URL + '/lot/all').
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
			$http.get(API_URL + '/trade/all').
	        then(function(response) {
	            $scope.tradeList = response.data;
	        });
		}
	};
	
	$scope.subcontractor = {
		findAll : function(loadToSearchResults) {
			$http.get(API_URL + '/subcontractor/all').
	        then(function(response) {
	            $scope.subcontractorList = response.data;
	            
	            if(loadToSearchResults){
	            	$scope.searchResults = [];
		        	for(item of response.data){
		        		$scope.subcontractor.buildSearchResult(item);
		        	}
	            }
	        });
		},
		findByName : function() {
			$http.get(API_URL + '/subcontractor/name/' + $scope.search.subcontractor.name).
	        then(function(response) {
	        	$scope.searchResults = [];
	        	$scope.subcontractor.buildSearchResult(response.data);
	        });	
		},
		findByTrades : function() {
			var tradesIds = "";
			for(var trade of $scope.tradeList){
				if(trade.checked){
					tradesIds += trade.id + ",";
				}
			}
			
			$http.get(API_URL + '/subcontractor/trades/' + tradesIds).
	        then(function(response) {
	        	$scope.searchResults = [];
	        	for(item of response.data){
	        		$scope.subcontractor.buildSearchResult(item);
	        	}
	        });	
		},
		buildSearchResult : function(item) {
			var result = {
				name : item.name,
				trades : item.trades,
				avgRating : computeAverage(item.ratings)
			};
        	$scope.searchResults.push(result);
		},
		launchSearch : function() {
			var activeTab = $('.nav-tabs .active')[0].id;
			if(activeTab == "tabByTrades"){
				$scope.subcontractor.findByTrades();
			}else if(activeTab == "tabBySubcontractor"){
				$scope.subcontractor.findByName();
			}
		},
		reset : function() {
			$scope.searchResults = [];
			$('#searchForm')[0].reset()
		}
	};
	
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.subcontractor.findAll();
	
} ]);