$(document).ready(function(){
	$("#submit").click(login_init);
});

var login_init = function() {
	//var url = "http://localhost:5000/sendOffer";
	var url = "https://c20t3fdb.herokuapp.com/signIn";
	var params = "username=" + document.getElementById("username").value + "&password=" + document.getElementById("password").value;
    var username = document.getElementById("username").value;

	doRequest('POST', url, params);
	data = JSON.parse(result);
    sessionStorage.setItem('username', username);	
};

var doRequest = function(method, url, params) {
    var req = new XMLHttpRequest();

    req.open(method, url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState < 4) {
        } else if (req.readyState == 4 && req.status == 200) {
            return req.responseText;
        }
    };
    req.send(params);
};