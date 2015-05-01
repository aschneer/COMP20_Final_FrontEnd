// GLOBAL VARIABLES:

// Map object.
var map;
var req_map = new XMLHttpRequest();

// Array of object with all information
// about each listing (marker,
// info window, event listener handle).
// Each marker will have an ID number
// which will be its index in this array.
// A "listing" object will look like:
	// {
	// 	var marker;
	// 	var infoWindow;
	// 	var clickListener;
	// 	var lat;
	// 	var lng;
	// 	var address;
	// 	var seller;
	// 	var food;
	// 	var endTime;
	// 	var price;
	// };
// endTime is a Javascript Date object.
var listings = [];

// FUNCTIONS:

// Add marker to the map and
// store its information in the
// global "listings" array.
function addListing(lat,lng,address,seller,food,when,qty,price)
{
	var newIndex = listings.length;
	var markerOptions = {
		map: map,
		title: String(newIndex),
		position: new google.maps.LatLng(lat,lng),
		visible: true
	};
	var newMarker = new google.maps.Marker(markerOptions);
	var infoWindowContent = "Address: " + address + ", seller: " + seller + ", food: " + food + ", When: " + when + ", QTY: " + qty + ", Price: " + price;
	var newInfoWindow = new google.maps.InfoWindow({
			content: infoWindowContent
	});
	var newClickListener = google.maps.event.addListener(newMarker,"click",function(){
			newInfoWindow.open(map,newMarker)
	});
	var newListing = {
		marker: newMarker,
		infoWindow: newInfoWindow,
		clickListener: newClickListener,
		lat: lat,
		lng: lng,
		address: address,
		seller: seller,
		food: food,
		when: when,
		qty: qty,
		price: price
	};
	listings.push(newListing);

}

// Delete a marker from the map
// and remove its information from
// the global "listings" array.
function deleteListing(index)
{
	listings[index].marker.setMap(null);
	listings[index].marker.setVisible(false);
	listings.splice(index,1);
}

// Hide marker from the map,
// but keep it in the listings
// array.
function hideMarker(index)
{
	listings[index].marker.setVisible(false);
}

// Re-show a hidden marker
// on the map.
function showMarker(index)
{
	listings[index].marker.setVisible(true);
}

/////////////////////////////////////////////////////////////////////////////////////////////////


//this now gets a longitude and latitude from the address we got from the server
//the parameter data_to_plot is an object

// takes address as a string
function validate_address(address)
{
	//address_to_plot = data_to_plot[i].address;
	//all_other_info = data_to_plot;
	//req_map.open("get", "https://maps.googleapis.com/maps/api/geocode/json?address="+address_to_plot+"");
				console.log("Shit's gonna work 111");

	req_map.open("get", "https://maps.googleapis.com/maps/api/geocode/json?address="+address, true);
	req_map.onreadystatechange = validate_address_ready;
	req_map.send();
}

function validate_address_ready() {
	if (req_map.readyState == 4 && req_map.status == 200) {
		console.log("Shit's gonna work 22");
		var validated_address = JSON.parse(req_map.responseText);
		console.log(validated_address);
		if ((validated_address.status === "OK") && (validated_address.results.length != 0)) {
			// Call function from submit_offer.js.
			send_offer_to_server({
				"address": validated_address.results[0].formatted_address,
				"lat": parseFloat(validated_address.results[0].geometry.location.lat),
				"lng": parseFloat(validated_address.results[0].geometry.location.lng),
				"error": false
			});
		} else {
			// Call function from submit_offer.js.
			send_offer_to_server({
				"address": "",
				"lat": 0,
				"lng": 0,
				"error": true
			});
		}
	
		// DELETE:

		//addListing(validated_address[1].geometry["location"].lat,validated_address[1].geometry["location"].lng,address_to_plot,all_other_info.provider,all_other_info.food,all_other_info.when);
		//addListing(validated_address.results[0].geometry.location.lat,validated_address.results[0].geometry["location"].lng,"303 Boston Ave","Helen's","burger","1200h");
	//} else if (req_map.readyState == 4 && req_map.status == 500) {
	//	console.log("invalid address. that's messed up.")
	//}

	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////


function map_update()
{
	// empty listings array and clear markers from google map
	for (var i = 0; i < listings.length; i++) {
		deleteListing(i);
	}
	req = new XMLHttpRequest();
	req.open("get", "https://c20t3fdb.herokuapp.com/offers?mode=buy&claimed=false", true);
	req.onreadystatechange = dataReady;
}


function dataReady() {
	console.log("Shit's gonna work");
	if (req.readyState == 4 && req.status == 200) {
		data = JSON.parse(req.responseText);
		for (i = 0; i < data.length; i++) {
			addListing(data[i].lat, data[i].lng, data[i].address, data[i].seller, data[i].food, data[i].when, data[i].quantity, data[i].price);
		}
	}
	// TODO: if failed req, display map with no markers
	// else if (req.readyState == 4 && req.status == 500) {
	// 	map = document.getElementById("map-canvas");
	// 	map.innerHTML = '<p>Oops! Something went wrong</p>';
		
	// }
}



// Initial function runs when HTML body loads.
function init()
{
	// Object containing initial options for the map.
	var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(42.407690,-71.118948),
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	// Create the map object.  This is global.
	map = new google.maps.Map(document.getElementById('map-canvas'),
		 	mapOptions);

	//load_offers();
	get_lat_lng("absadf");

	// Load all food items onto map.
		// READ FROM DATABASE.
		// FOR EACH ITEM, CREATE MARKER.
	// Account for time zone here...
	//var endTimeTemp = new Date(2015,3,30,19,30,0,0);
	//addListing(42.407690,-71.118948,"303 Boston Ave","Helen's Roast Beef","Large cheese pizza",endTimeTemp);
	//console.log(listings);

}



// RESOURCES FROM GOOGLE:
/*

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
*/