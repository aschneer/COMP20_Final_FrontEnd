$(document).ready(function () {
	$("#submit_offer_form").hide();
	$("#claimed_offers").hide();
	$("#restaurant_div").hide();
	$("#login_form").hide();
	$("#signup_form").hide();


	

	$("#submit_offer_button").click(function(){
			$("#map-canvas").hide();
			$("#submit_offer_form").show();
			$("#customer_div").hide();
			$("#restaurant_div").show();
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





});
