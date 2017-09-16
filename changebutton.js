function wc(str) {
    return str.split(" ").length;
}

var person = prompt("HECK OFF", "yessir");

words = 0

while (wc(person) < 20) {
    person = prompt("Unacceptable", "");
}


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

function double_delete() {
	delete_buy();
	delete_buy();
	
}


double_delete();

var target = document.querySelector('body');

var observer = new MutationObserver(double_delete);

var config = {
  attributes: true,
  childList: true,
  characterData: true
};

observer.observe(target, config);

double_delete();


