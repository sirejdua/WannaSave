var plus_2_cart = document.getElementsByClassName("a-button-stack")[0];

var brand = document.getElementById("brand").text.replace(/\s/g,'');

if (brand != "Intuit") {
	plus_2_cart.remove();
}
