/////////////////////////////////////////////////////////////////////////
// REACT CODE HERE FOR GENERATING SIDEBAR
/////////////////////////////////////////////////////////////////////////

OfferSidebar = React.createClass({displayName: "OfferSidebar",
	render: function() {
		return (
			React.createElement("ol", null, 
		        this.props.offers.map(function(offer) {
        			return (
        				React.createElement(Offer, {key: offer._id, 
        						id: offer._id, 
        						provider: offer.provider, 
        						food: offer.food, 
					  			address: offer.address, 
					  			when: offer.when}) );
        		})
      		)
      	);
	}
});

Offer = React.createClass({displayName: "Offer",
    handleClick: function() {
    	claim_offer(this.props.id);
    },
    render: function() {
        return (
            React.createElement("li", {className: "offer"}, 
            	React.createElement("div", {onClick: this.handleClick}, 
            		React.createElement("p", null, " Provider: ", this.props.provider), 
            		React.createElement("p", null, " Food: ", this.props.food), 
            		React.createElement("p", null, " Address: ", this.props.address), 
            		React.createElement("p", null, " When: ", this.props.when)
            	)
            )
        );
    }
});

/////////////////////////////////////////////////////////////////////////
// REQUEST CODE HERE
/////////////////////////////////////////////////////////////////////////

var xhr;  //handles providers' offers
var xhr2; //handles offers that will be displayed on the home page
var xhr3; //handles unclaimed offers
var xhr4;

// loads offers posted by a user that have been claimed
function load_claimed_offers()
{
	xhr = new XMLHttpRequest();
	handle_request();
}

function handle_request() {
	var url = "https://c20t3fdb.herokuapp.com/offers?mode=sell&claimed=true&username=" + sessionStorage.getItem('username');
	xhr = new XMLHttpRequest();
	xhr.open("get", url, true);

	xhr.onreadystatechange = dataReady;
	xhr.send(null); // Go! Execute!
}

function dataReady() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		React.render(
			React.createElement(OfferSidebar, {offers: data}),
		  	document.getElementById('foodies')
		);
	}
	else if (xhr.readyState == 4 && xhr.status == 500) {
		foodies = document.getElementById("foodies");
		foodies.innerHTML = '<p>Oops! Something went wrong</p>';
	}
}

/////////////////////////////////////////////////////////////////////////

// Loads unclaimed offers that can be purchased
function load_unclaimed_offers() {
	xhr3 = new XMLHttpRequest();
	handle_request3();
}

function handle_request3() {
	var url = 'https://c20t3fdb.herokuapp.com/offers?mode=buy&claimed=false';
	xhr3 = new XMLHttpRequest();
	xhr3.open("get", url, true);

	xhr3.onreadystatechange = dataReady3;
	xhr3.send(null); // Go! Execute!
}

function dataReady3() {
	if (xhr3.readyState == 4 && xhr3.status == 200) {
		data = JSON.parse(xhr3.responseText);

		React.render(
			React.createElement(OfferSidebar, {offers: data}),
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
function load_offers_claimed_by_user() {
	xhr2 = new XMLHttpRequest();
	handle_request2();
}

function handle_request2() {
	var url = 'https://c20t3fdb.herokuapp.com/offers?mode=buy&claimed=true&username=' + sessionStorage.getItem('username');
	xhr2 = new XMLHttpRequest();
	xhr2.open("get", url, true);

	xhr2.onreadystatechange = dataReady2;
	xhr2.send(null); // Go! Execute!
}

function dataReady2() {
	if (xhr2.readyState == 4 && xhr2.status == 200) {
		data = JSON.parse(xhr2.responseText);
		React.render(
			React.createElement(OfferSidebar, {offers: data}),
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
function load_unclaimed_offers_posted_by_user() {
	xhr4 = new XMLHttpRequest();
	handle_request4();
}

function handle_request4() {
	var url = 'https://c20t3fdb.herokuapp.com/offers?mode=sell&claimed=false&username=' + sessionStorage.getItem('username');
	xhr4 = new XMLHttpRequest();
	xhr4.open("get", url, true);

	xhr4.onreadystatechange = dataReady2;
	xhr4.send(null); // Go! Execute!
}

function dataReady4() {
	if (xhr4.readyState == 4 && xhr4.status == 200) {
		data = JSON.parse(xhr2.responseText);
		React.render(
			React.createElement(OfferSidebar, {offers: data}),
		  	document.getElementById('my_unclaimed_offers')
		);
	}
	else if (xhr4.readyState == 4 && xhr4.status == 500) {
		my_unclaimed_offers = document.getElementById("my_unclaimed_offers");
		my_unclaimed_offers.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}

///////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
	load_unclaimed_offers();
	$("#submit_offer_form").hide();
	$("#claimed_offers").hide();
	$("#restaurant_div").hide();
	$("#login_form").hide();
	$("#signup_form").hide();
	$("#restaurant_claimed_offers").hide();
	$("#restaurant_available_items").hide();

		if (sessionStorage.length == 0){
			$("#logout_navbar").hide();
			$("#username_navbar").hide();
		} else {
			$("#login_button").hide();
			$("#logout_navbar").show();
			$("#username_navbar").append(sessionStorage.getItem('username'));
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

			load_claimed_offers();
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
		// TODO CHECK IF THIS IS CORRECT
			//load_offers_claimed_by_user();
			$("#available_items").hide();
			$("#claimed_offers").show();
	});

	$("#restaurant_offers_button").click(function(){
			console.log("restaurant offers click");
			load_unclaimed_offers_posted_by_user(); // TODO CHECK THIS
			$("#restaurant_claimed_offers").hide();
			$("#restaurant_available_items").show();
	});

	$("#claimed_from_restaurant_button").click(function(){
			console.log("restaurant offers claimed click");
			$("#restaurant_available_items").hide();
			$("#restaurant_claimed_offers").show();
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
