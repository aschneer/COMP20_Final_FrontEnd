$(document).ready(function(){
	$("#submit").click(submit_init);
});

var submit_init = function() {
	url = "https://c20t3fdb.herokuapp.com/sendOffer";
	street = document.getElementById("street").value;
	street_number = document.getElementById("street_number").value;
	city = document.getElementById("city").value;
	state = document.getElementById("state").value;
	zipcode = document.getElementById("zipcode").value;

	// Use Google Maps Geocoding library to
	// validate address of food being posted.
	address = street_number + "+" + street + ",+" + city + ",+" + state + "+" zipcode;
	console.log(address);
	// Call function from map.js.
	validate_address(address);
}

// called in map.js
function send_offer_to_server(validated_address_obj) {
	if(validated_address_obj.error) {
		alert("Invalid address.");
	} else {
		var price = document.getElementById("price").value;
		var quantity = document.getElementById("quantity").value;
		var username = sessionStorage.getItem("username");
		var when = document.getElementById("when").value;
		var food = document.getElementById("food").value;
		var params = "seller=" + username + "&food=" + food + "&address=" + validated_address_obj.address 
					+ "&when=" + when + "&quantity=" + quantity + "&price=" + price + "&lat=" 
					+ validated_address_obj.lat + "&lng=" + validated_address_obj.lng;
		var req = new XMLHttpRequest();
		req.open('POST', url, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				console.log('worked yo.');
				load_sellmode_unclaimed()
				map_update();
			}
		};
		req.send(params);

		$("#map-canvas").hide();
		$("#submit_offer_form").show();
		$("#customer_div").hide();
		$("#restaurant_div").show();
		$("#restaurant_claimed_offers").hide();
		$("#restaurant_available_items").show();

		$("#login_form").hide();
		$("#signup_form").hide();
	}
}
