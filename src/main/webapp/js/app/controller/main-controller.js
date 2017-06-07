
app.controller('MainController', ['$scope', 
  function($scope,$http) {
	// Add 'active' class to current page menu item
	var anchor = document.URL.split("#!/")[1];
	$(".menu-item").removeClass("active");
	$("#menu-item-" + anchor).addClass("active");
}]);