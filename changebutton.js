try {
	var plus_2_cart = document.getElementsByClassName("a-button-stack")[0];

	try {
		var brand = document.getElementById("brand").text.replace(/\s/g,'');
		if (brand != "Intuit") {

			for (var i = 0; i < 2; i++) {
				plus_2_cart.remove();
			}
		}
	}
	catch (e) {
		for (var i = 0; i < 2; i++) {
			plus_2_cart.remove();
		}
	}
	
}
catch (e) {

}