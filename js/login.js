$(document).ready(function(){
	$("#login").click(login_init);
});

var login_init = function() {
	//var url = "http://localhost:5000/sendOffer";
	var url = "https://c20t3server.herokuapp.com/signIn";
	var params = "username=" + document.getElementById("login_username").value + "&password=" + document.getElementById("login_password").value;
    var username = document.getElementById("login_username").value;

    var req = new XMLHttpRequest();

    req.open('POST', url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            console.log('worked yo.');
        }
    };
    req.send(params);
    sessionStorage.setItem('username', username);	

   // $("#buy_button").addClass('active');

};