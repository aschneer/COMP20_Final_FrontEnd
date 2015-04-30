var xhr;
function load_offers()
{
	xhr = new XMLHttpRequest();
	handle_request();
}


		function handle_request() {
			xhr = new XMLHttpRequest();
			xhr.open("get", "https://c20t3fdb.herokuapp.com/providerOffers?provider=abdi&claimed=false", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

			xhr.onreadystatechange = dataReady;
			xhr.send(null); // Go! Execute!
		}

		function dataReady() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				 = JSON.parse(xhr.responseText);
				scheduleDom = document.getElementById("schedule");
				scheduleDom.innerHTML = scheduleData["line"];
			}
			else if (xhr.readyState == 4 && xhr.status == 500) {
				scheduleDom = document.getElementById("schedule");
				scheduleDom.innerHTML = '<p><img src="http://www.yiyinglu.com/failwhale/images/Homer_the_New_Fail_Whale_by_edwheeler.jpg" alt="fail" /></p>';
				
			}
		}

$(document).ready(function () {
	$("#submit_offer_form").hide();
	$("#claimed_offers").hide();
	$("#restaurant_div").hide();
	$("#login_form").hide();
	$("#signup_form").hide();
		if (sessionStorage.length == 0){
			$("#logout_navbar").hide();
			$("#username_navbar").hide();
		} else {
			$("#logout_navbar").show();
			$("#username_navbar").append(username);
		}

	$("#submit_offer_button").click(function(){
			$("#map-canvas").hide();
			$("#submit_offer_form").show();
			$("#customer_div").hide();
			$("#restaurant_div").show();

			$("#login_form").hide();
			$("#signup_form").hide();

			load_offers();
	});

	$("#show_me_food_button").click(function(){
			$("#map-canvas").show();
			$("#submit_offer_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#login_form").hide();
			$("#signup_form").hide();
	});

	$("#whats_available_button").click(function(){
			$("#claimed_offers").hide();
			$("#available_items").show();
	});

	$("#claimed_offers_button").click(function(){
			$("#available_items").hide();
			$("#claimed_offers").show();
	});

	$("#login_button").click(function(){
			$("#map-canvas").hide();
			$("#login_form").show();
			$("#signup_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").hide();
			$("#submit_offer_form").hide();
	});

	$("#sign_up_button").click(function(){
			$("#map-canvas").hide();
			$("#login_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").hide();
			$("#signup_form").show();
	});

	$("#signup").click(function(){
			$("#map-canvas").show();
			$("#login_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#signup_form").hide();
	});





});
