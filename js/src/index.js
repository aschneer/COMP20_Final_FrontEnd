/////////////////////////////////////////////////////////////////////////
// REACT CODE HERE FOR GENERATING SIDEBAR
/////////////////////////////////////////////////////////////////////////

OfferSidebar = React.createClass({
	render: function() {
		return (
			<ol>
		        {this.props.offers.map(function(offer) {
        			return (
        				<Offer  key 		=	{offer._id}
        						id 			= 	{offer._id}
        						username 	=	{offer.username} 
        						price 		= 	{offer.price}
        						food 		=	{offer.food} 
					  			address 	= 	{offer.address}
					  			when 		= 	{offer.when} /> );
        		})}
      		</ol>
      	);
	}
});

Offer = React.createClass({
    handleClick: function() {
    	claim_offer(this.props.id);
    },
    render: function() {
        return (
            <li>
            	<div className="offer" onClick={this.handleClick}>
            		<p className="offer-when"> When: {this.props.when}</p>
	            	<p className="offer-food"> Food: {this.props.food}</p>
	            	<p className="offer-price"> Price: {this.props.price}</p>
            		<p className="offer-username"> Provider: {this.props.username}</p>
            		<p className="offer-address"> Address: {this.props.address}</p>
            	</div>
            </li>
        );
    }
});

/////////////////////////////////////////////////////////////////////////
// REQUEST CODE HERE
/////////////////////////////////////////////////////////////////////////

var xhr1 = new XMLHttpRequest();  //handles offers posted by a user that have been claimed
var xhr2 = new XMLHttpRequest(); //handles claimed offers purchased by a user
var xhr3 = new XMLHttpRequest(); //handles all unclaimed offers that can be purchased by user
var xhr4 = new XMLHttpRequest(); //handles unclaimed offers posted by the user


// loads offers posted by a user that have been claimed
function load_sellmode_claimed() {
	var url = "https://c20t3server.herokuapp.com/offers?mode=sell&claimed=true&username=" + sessionStorage.getItem('username');
	xhr1.open("get", url, true);

	xhr1.onreadystatechange = dataReady_sellmode_claimed;
	xhr1.send(); // Go! Execute!
}

function dataReady_sellmode_claimed() {
	if (xhr1.readyState == 4 && xhr1.status == 200) {
		data = JSON.parse(xhr1.responseText);
		React.render(
			<OfferSidebar offers={data} />,
		  	document.getElementById('restaurant_claimed_offers')
		);
	}
	else if (xhr1.readyState == 4 && xhr1.status == 500) {
		foodies = document.getElementById("restaurant_claimed_offers");
		foodies.innerHTML = '<p>Oops! Something went wrong</p>';
	}
}

/////////////////////////////////////////////////////////////////////////

// Loads unclaimed offers that can be purchased
function load_buymode_unclaimed() {
	var url = 'https://c20t3server.herokuapp.com/offers?mode=buy&claimed=false';
	xhr3.open("get", url, true);

	xhr3.onreadystatechange = dataReady_buymode_unclaimed;
	xhr3.send(); // Go! Execute!
}

function dataReady_buymode_unclaimed() {
	if (xhr3.readyState == 4 && xhr3.status == 200) {
		data = JSON.parse(xhr3.responseText);

		React.render(
			<OfferSidebar offers={data} />,
		  	document.getElementById('claim_me')
		);
	}
	else if (xhr3.readyState == 4 && xhr3.status == 500) {
		claim_me = document.getElementById("claim_me");
		claim_me.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}

/////////////////////////////////////////////////////////////////////////

// Loads claimed offers purchased by a user
function load_buymode_claimed() {
	var url = 'https://c20t3server.herokuapp.com/offers?mode=buy&claimed=true&username=' + sessionStorage.getItem('username');
	xhr2.open("get", url, true);

	xhr2.onreadystatechange = dataReady_buymode_claimed;
	xhr2.send(); // Go! Execute!
}

function dataReady_buymode_claimed() {
	if (xhr2.readyState == 4 && xhr2.status == 200) {
		data = JSON.parse(xhr2.responseText);
		React.render(
			<OfferSidebar offers={data} />,
		  	document.getElementById('my_claimed_offers_bought')
		);
	}
	else if (xhr2.readyState == 4 && xhr2.status == 500) {
		my_claimed_offers_bought = document.getElementById("my_claimed_offers_bought");
		my_claimed_offers_bought.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}

///////////////////////////////////////////////////////////////////////////////////

// loads unclaimed offers posted by the user
function load_sellmode_unclaimed() {
	var url = 'https://c20t3server.herokuapp.com/offers?mode=sell&claimed=false&username=' + sessionStorage.getItem('username');
	xhr4.open("get", url, true);

	xhr4.onreadystatechange = dataReady_sellmode_unclaimed;
	xhr4.send(); // Go! Execute!
}

function dataReady_sellmode_unclaimed() {
	if (xhr4.readyState == 4 && xhr4.status == 200) {
		data = JSON.parse(xhr4.responseText);
		React.render(
			<OfferSidebar offers={data} />,
		  	document.getElementById('restaurant_available_items')
		);
	}
	else if (xhr4.readyState == 4 && xhr4.status == 500) {
		my_unclaimed_offers = document.getElementById("restaurant_available_items");
		my_unclaimed_offers.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}

///////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
	load_buymode_unclaimed();
	init();

	$("#submit_offer_form").hide();
	$("#claimed_offers").hide();
	$("#restaurant_div").hide();
	$("#login_form").hide();
	$("#signup_form").hide();
	$("#restaurant_claimed_offers").hide();
	$("#restaurant_available_items").hide();
	$("#whats_available_button").addClass('active');

		if (sessionStorage.length == 0){
			$("#logout_navbar").hide();
			$("#username_navbar").hide();
		} else {
			$("#login_button").hide();
			$("#logout_navbar").show();
			$("#username_navbar a").append("Welcome, " + sessionStorage.getItem('username'));
		}

	$("#submit_offer_button").click(function(){
			console.log("submit offer click");

			$("#map-canvas").hide();
			$("#submit_offer_form").show();
			$("#customer_div").hide();
			$("#restaurant_div").show();
			$("#restaurant_claimed_offers").hide();
			$("#restaurant_available_items").show();

			$("#login_form").hide();
			$("#signup_form").hide();

			$("#restaurant_offers_button").addClass('active');
			$("#claimed_from_restaurant_button").removeClass('active');



			load_sellmode_unclaimed(); 
	});

	$("#show_me_food_button").click(function(){
			load_buymode_unclaimed();
			$("#map-canvas").show();
			$("#submit_offer_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#login_form").hide();
			$("#signup_form").hide();
			$("#whats_available_button").addClass('active');
			$("#claimed_offers_button").removeClass('active');
	});

	$("#buy_button").click(function(){
			load_buymode_unclaimed();
			$("#map-canvas").show();
			$("#submit_offer_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#login_form").hide();
			$("#signup_form").hide();
			$("#whats_available_button").addClass('active');
			$("#claimed_offers_button").removeClass('active');
	});

	$("#whats_available_button").click(function(){
			load_buymode_unclaimed();
			$("#claimed_offers").hide();
			$("#available_items").show();
			$(this).addClass('active');
			$("#claimed_offers_button").removeClass('active');
	});

	$("#claimed_offers_button").click(function(){
			load_buymode_claimed();
			$("#available_items").hide();
			$("#claimed_offers").show();
			$(this).addClass('active');
			$("#whats_available_button").removeClass('active');

	});

	$("#restaurant_offers_button").click(function(){
			console.log("restaurant offers click");
			load_buymode_unclaimed(); 
			$("#restaurant_claimed_offers").hide();
			$("#restaurant_available_items").show();

			$(this).addClass('active');
			$("#claimed_from_restaurant_button").removeClass('active');
	});

	$("#claimed_from_restaurant_button").click(function(){
			console.log("restaurant offers claimed click");
			load_sellmode_claimed();

			$("#restaurant_available_items").hide();
			$("#restaurant_claimed_offers").show();

			$(this).addClass('active');
			$("#restaurant_offers_button").removeClass('active');
	});

	$("#login_button").click(function(){
			console.log("login button clicked");
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

	$("#login").click(function(){
			location.reload();
			$("#map-canvas").show();
			$("#login_form").hide();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#signup_form").hide();
	});

	$("#logout_navbar").click(function(){
			sessionStorage.clear();
			location.reload();
			$("#map-canvas").show();
			$("#restaurant_div").hide();
			$("#customer_div").show();
			$("#username_navbar").hide();
	});

});
