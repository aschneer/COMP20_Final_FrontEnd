// GLOBAL VARIABLES:

// Map object.
var map;
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
	// 	var restaurant;
	// 	var description;
	// 	var endTime;
	// 	var price;
	// };
// endTime is a Javascript Date object.
var listings = [];

// FUNCTIONS:

// Add marker to the map and
// store its information in the
// global "listings" array.
function addListing(lat,lng,address,restaurant,description,endTime,price)
{
	var newIndex = listings.length;
	var markerOptions = {
		map: map,
		title: String(newIndex),
		position: new google.maps.LatLng(lat,lng),
		visible: true,
		icon: "./assets/pizzaSlice_01_small.png"
	};
	var newMarker = new google.maps.Marker(markerOptions);
	var infoWindowContent = "test";
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
		restaurant: restaurant,
		description: description,
		endTime: endTime,
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

// Function to update the site
// in real time with the status
// of food items, the ETA time
// until food is ready, and the
// colors of markers on the map.
function updateListings()
{

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
	// Load all food items onto map.
		// READ FROM DATABASE.
		// FOR EACH ITEM, CREATE MARKER.
	// Account for time zone here...
	var endTimeTemp = new Date(2015,3,30,19,30,0,0);
	addListing(42.407690,-71.118948,"303 Boston Ave","Helen's Roast Beef","Large cheese pizza",endTimeTemp,14.73);
	console.log(listings);
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