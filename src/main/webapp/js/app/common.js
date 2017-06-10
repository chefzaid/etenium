
var API_URL = 'http://localhost:8080/etenium/api';

function activateMenuItem() {
	// Add 'active' class to current page menu item
	var anchor = document.URL.split("#!/")[1];
	$(".menu-item").removeClass("active");
	$("#menu-item-" + anchor).addClass("active");
}