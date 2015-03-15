// GLOBAL VARIABLES:
var map;

// FUNCTIONS:

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
}