$(document).ready(function(){
	$("#signup").click(signup_init);
});

var signup_init = function() {
	//var url = "http://localhost:5000/sendOffer";
	var url = "https://c20t3fdb.herokuapp.com/signUp";
	var params = "username=" + document.getElementById("signup_username").value + "&name=" + document.getElementById("name").value + 
				"&email=" + document.getElementById("email").value + "&phone=" + document.getElementById("phone").value
                + "&password=" + document.getElementById("signup_password").value;
    var req = new XMLHttpRequest();

    req.open('POST', url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState < 4) {
        } else if (req.readyState == 4 && req.status == 200) {
            return req.responseText;
        }
    };
    req.send(params);
	/*data = JSON.parse(result);
    console.log(data);*/	
};
