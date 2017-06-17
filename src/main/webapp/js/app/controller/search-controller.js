app.controller('SearchController', function($scope, $http) {

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
	        		var result = $scope.subcontractor.buildSearchResult(item);
	        		for(var i=0; i<result.trades.length; i++){
	        			if(tradesIds.indexOf(result.trades[i].id) >= 0){
	        				result.trades[i].makeBold = true;	
		        		}	
	        		}
	        	}
	        });	
		},
		buildSearchResult : function(item) {
			var result = {
				id : item.id,
				name : item.name,
				trades : item.trades,
				avgRating : computeAverage(item.ratings)
			};
        	$scope.searchResults.push(result);
        	return $scope.searchResults[$scope.searchResults.length-1];
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
		},
		remove : function(index) {
			$scope.searchResults.splice(index, 1);
			var id = $scope.subcontractorList[index].id;
			$http.delete(API_URL + '/subcontractor/' + id).
	        then(function(response) {
	        	$scope.subcontractor.findAll();
	        });
		},
		modify : function(index) {
			var id = $scope.subcontractorList[index].id;
			window.location = BASE_URL + "/?#!/subcontractors/" + id;
		}
	};
	
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.subcontractor.findAll();
	
});