function delete_buy() {
	var plus_two_cart_arg = document.getElementsByClassName("a-button-stack");
	//window.alert(plus_two_cart_arg.length);
	try {
		var brand = document.getElementById("brand").text.replace(/\s/g,'');
	}
	catch(err) {
		var brand = "";
	}
	if (brand != "Intuit") {
		for (var i = 0; i < plus_two_cart_arg.length; i++) {
			plus_two_cart_arg[i].remove();
			try {
				plus_two_cart_arg[i].remove();
			}
			catch(err) {
				//nop
			}
		}
	}
}

delete_buy();
delete_buy();