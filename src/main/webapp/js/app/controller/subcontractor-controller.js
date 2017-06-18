app.controller('SubcontractorController', function($scope, $http, $timeout, $routeParams) {

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
		ratings : []
	};
	
	$scope.subcontractors = {
		findById : function() {
			$http.get(API_URL + '/subcontractor/' + $routeParams.id).
	        then(function(response) {
	        	var sc = $.extend(true, {}, response.data);
	        	$scope.subcontractor = sc;
	        	
	        	$timeout(function(){
		        	for(var trade of $scope.subcontractor.trades){
		        		// Check lots
		        		for(var i=0; i<$scope.lotList.length; i++){
		        			if(trade.lot.id == $scope.lotList[i].id){
		        				$scope.lotList[i].checked = true;
		        				break;
		        			}
		        		}
		        		if(!$scope.showTradesOfLot[trade.lot.id]){
		        			$scope.lot.check(trade.lot.id);      			
		        		}
		        		
	        			// Check trades
	        			for(var i=0; i<$scope.tradeList.length; i++){
		        			if(trade.id == $scope.tradeList[i].id){
		        				$scope.tradeList[i].checked = true;
		        				break;
		        			}
		        		}
		        	}		
	        	}, 100); // To wait for the tradeList REST loading

	        	$scope.avgRating = computeAverage($scope.subcontractor.ratings);
	        });
		},
		save : function() {
			for(var trade of $scope.tradeList){
				if(trade.checked){
					$scope.subcontractor.trades.push(trade);
				}
			}
			$http.post(API_URL + '/subcontractor', $scope.subcontractor).
	        then(function(response) {
	        	if($routeParams.id < 0){
	        		$scope.subcontractor = {};
		        	$('#subcontractorForm')[0].reset();	
	        	}
	        });
		}
	};
	
	$scope.subcontractorType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/type/all').
	        then(function(response) {
	            $scope.subcontractorTypeList = response.data;
	            $('#subcontractorType').select2();
	        });
		}
	};
	
	$scope.identifierType = {
		findAll : function() {
			$http.get(API_URL + '/subcontractor/identifierType/all').
	        then(function(response) {
	            $scope.identifierTypeList = response.data;
	            $('#identifierType').select2();
	        });
		}
	};
	
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
	
	$scope.project = {
		findAll : function() {
			$http.get(API_URL + '/project/all').
	        then(function(response) {
	            $scope.projectList = response.data;
	            $('#ratingProject').select2();
	        });
		}
	};
	
	$scope.contact = {
		save : function() {
			var newContact = $.extend(true, {}, $scope.ct);
			if(newContact.index >= 0){
				$scope.subcontractor.contacts[newContact.index] = newContact;
			}else{
				$scope.subcontractor.contacts.push(newContact);	
			}
			$scope.ct = {};
		},
		remove : function(index) {
			$scope.subcontractor.contacts.splice(index, 1);
		},
		modify : function(index) {
			var newContact = $.extend(true, {}, $scope.subcontractor.contacts[index]);
			$scope.ct = newContact;
			$scope.ct.index = index;
		}
	};
	
	$scope.rating = {
		save : function() {
			var newRating = $.extend(true, {}, $scope.rt);
			if(newRating.index >= 0){
				$scope.subcontractor.ratings[newRating.index] = newRating;
			}else{
				$scope.subcontractor.ratings.push(newRating);	
			}
			$scope.rt = {};
			$scope.avgRating = computeAverage($scope.subcontractor.ratings);
		},
		remove : function(index) {
			$scope.subcontractor.ratings.splice(index, 1);
		},
		modify : function(index) {
			var newRating = $.extend(true, {}, $scope.subcontractor.ratings[index]);
			$scope.rt = newRating;
			$scope.rt.index = index;
			$scope.project.findAll(); // Needed along with "track by prj.id" in ng-options for it to work
		}
	};

	$scope.subcontractorType.findAll();
	$scope.identifierType.findAll();
	$scope.lot.findAll();
	$scope.trade.findAll();
	$scope.project.findAll();

	if($routeParams.id >= 0){
		$scope.subcontractors.findById();
	}
	
});