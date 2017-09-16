var plus_2_cart = document.getElementsByClassName("a-button-stack")[0];

try {
	var brand = document.getElementById("brand").text.replace(/\s/g,'');
}
catch (e) {
	var brand = ""
}

if (brand != "Intuit") {

	for (var i = 0; i < 2; i++) {
		plus_2_cart.remove();
	}
}
