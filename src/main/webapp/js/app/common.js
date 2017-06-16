
var API_URL = 'http://localhost:8080/etenium/api';

function activateMenuItem() {
	// Add 'active' class to current page menu item
	var anchor = document.URL.split("#!/")[1];
	$(".menu-item").removeClass("active");
	$("#menu-item-" + anchor).addClass("active");
}

function computeAverage(ratings) {
	var total = 0;
	for(var rating of ratings){
		total += parseInt(rating.stars);
	}
	var result = total / ratings.length;
	return result.toPrecision(2) + " / 5";
}