
var BASE_URL = 'http://localhost:8080/etenium';
var API_URL = BASE_URL + '/api';

function activateMenuItem() {
	// Add 'active' class to current page menu item
	var anchor = document.URL.split("#!/")[1].split('/')[0];
	$(".menu-item").removeClass("active");
	$("#menu-item-" + anchor).addClass("active");
}

function computeAverage(ratings) {
	var total = 0;
	for(var rating of ratings){
		var stars = rating.stars ? parseInt(rating.stars) : 0;
		total += stars;
	}
	var result = total / ratings.length;
	var resultStr = result.toPrecision(2) + " / 5";
	return  resultStr.replace(".0", "") ;
}