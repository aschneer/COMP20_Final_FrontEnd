OfferSidebar = React.createClass({

	render: function() {
		return (
			<ol>
		        {this.props.offers.map(function(offer) {
        			return (
        				<Offer  key 		=	{offer._id}
        						id 			= 	{offer._id}
        						provider 	=	{offer.provider} 
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
            <li className="offer">
            	<div onClick={this.handleClick}>
            		<p> Provider: {this.props.provider}</p>
            		<p> Food: {this.props.food}</p>
            		<p> Address: {this.props.address}</p>
            		<p> When: {this.props.when}</p>
            	</div>
            </li>
        );
    }
});

var xhr;  //handles providers' offers
var xhr2; //handles offers that will be displayed on the home page
var xhr3; //handles unclaimed offers
function load_claimed_offers()
{
	xhr = new XMLHttpRequest();
	handle_request();
}

function handle_request() {
	xhr = new XMLHttpRequest();
	xhr.open("get", "https://c20t3fdb.herokuapp.com/providerOffers?provider=abdi&claimed=true", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

	xhr.onreadystatechange = dataReady;
	xhr.send(null); // Go! Execute!
}

function dataReady() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		for (i = 0; i < data.length; i++) {
			$("#foodies").append("<p><a>Provider: " + data[i].provider + " Food: " + data[i].food + " Address: " + data[i].address + " Ready At " + data[i].when + " Quantity " + data[i].quantity + "</a></p>");
			
		}
	}
	else if (xhr.readyState == 4 && xhr.status == 500) {
		foodies = document.getElementById("foodies");
		foodies.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}
/////////////////////////////////////////////////////////////////////////

function load_unclaimed_offers() {
	xhr3 = new XMLHttpRequest();
	handle_request3();
}

function handle_request3() {
	xhr3 = new XMLHttpRequest();
	xhr3.open("get", "https://c20t3fdb.herokuapp.com/userOffers", true);

	xhr3.onreadystatechange = dataReady3;
	xhr3.send(null); // Go! Execute!
}

function dataReady3() {
	if (xhr3.readyState == 4 && xhr3.status == 200) {
		data = JSON.parse(xhr3.responseText);
		//foodies.innerHTML = scheduleData["line"];
		for (i = 0; i < data.length; i++) {
			console.log("stevenation");
			React.render(
				<OfferSidebar offers={data} />,
			  	document.getElementById('claim_me')
			);

			// var id = data[i]._id;
			// // claim_me is the list of unclaimed items for those looking for food
			// $("#claim_me").append('<p><a id=\"'+id+'\" onclick=claim_offer(\"' + id + '\")>Provider: " + data[i].provider + " Food: " + data[i].food + " Address: " + data[i].address + " Ready At " + data[i].when + " Quantity " + data[i].quantity + "</a></p>');
		}
	}
	else if (xhr3.readyState == 4 && xhr3.status == 500) {
		claim_me = document.getElementById("claim_me");
		claim_me.innerHTML = '<p>Oops! Something went wrong</p>';
		
	}
}

/////////////////////////////////////////////////////////////////////////

function load_offers_claimed_by_user() {
	xhr2 = new XMLHttpRequest();
	handle_request2();
}

function handle_request2() {
	xhr2 = new XMLHttpRequest();
	xhr2.open("get", "https://c20t3fdb.herokuapp.com/userOffers?login="+sessionStorage.getItem('username'), true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application

	xhr2.onreadystatechange = dataReady2;
	xhr2.send(null); // Go! Execute!
}

function dataReady2() {
	if (xhr2.readyState == 4 && xhr2.status == 200) {
		data = JSON.parse(xhr2.responseText);
		//foodies.innerHTML = scheduleData["line"];
		for (i = 0; i < data.length; i++) {
			var id = data[i]._id;
			// claim_me is the list of unclaimed items for those looking for food
			$("#claim_me").append("<p><a id="+id+" onclick='claim_offer(" + id + ")'>Provider: " + data[i].provider + " Food: " + data[i].food + " Address: " + data[i].address + " Ready At " + data[i].when + " Quantity " + data[i].quantity + "</a></p>");
		}
	}
	else if (xhr2.readyState == 4 && xhr2.status == 500) {
		foodies = document.getElementById("foodies");
		foodies.innerHTML = '<p>Oops! Something went wrong</p>';
		
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
		if (sessionStorage.length == 0){
			$("#logout_navbar").hide();
			$("#username_navbar").hide();
		} else {
			$("#login_button").hide();
			$("#logout_navbar").show();
			$("#username_navbar").append(sessionStorage.getItem('username'));
		}

	$("#submit_offer_button").click(function(){
			$("#map-canvas").hide();
			$("#submit_offer_form").show();
			$("#customer_div").hide();
			$("#restaurant_div").show();

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
