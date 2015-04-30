$(document).ready(function(){
	$("#login").click(login_init);
});

var login_init = function() {
	//var url = "http://localhost:5000/sendOffer";
	var url = "https://c20t3fdb.herokuapp.com/signIn";
	var params = "username=" + document.getElementById("login_username").value + "&password=" + document.getElementById("login_password").value;
    var username = document.getElementById("login_username").value;

	doRequest('POST', url, params);
	/*data = JSON.parse(result);*/
    sessionStorage.setItem('username', username);	
};

var doRequest = function(method, url, params) {
    var req = new XMLHttpRequest();

    req.open(method, url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log("Wagwan");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            // SHOULD CALL REUPDATED SOMETHING ELSE
            console.log('worked yo.');
        }
    };
    req.send(params);
};