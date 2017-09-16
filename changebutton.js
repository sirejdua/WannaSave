var plus_2_cart = document.getElementsByClassName("a-button-stack")[0];

try {
	var brand = document.getElementById("brand").text.replace(/\s/g,'');
}
catch (e) {
	var brand = ""
}

if (brand != "Intuit") {
	plus_2_cart.remove();
}
