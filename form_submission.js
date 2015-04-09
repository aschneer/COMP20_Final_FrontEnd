var request = new XMLHttpRequest();
var provider;
var food;
var address;
var when;

function init() {
	provider = document.getElementById("provider");
	food = document.getElementById("food");
	address = document.getElementById("address");
	when = document.getElementById("when");
}

function send_offer() {
				request.open("POST","https://secret-about-box.herokuapp.com/sendLocation",true);
				request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				request.onreadystatechange = callbackfunction;
				request.send("provider=" + provider + "&food=" + food + "&address=" + address + "&when=" + when);
			}
			
function callbackfunction() {
	if (request.readyState == 4 && request.status == 200) {				
		data = JSON.parse(request.responseText);
		plotmarkers();
	} else if (request.readyState == 4 && request.status != 200){
		alert("Page not loaded");
	}				
}