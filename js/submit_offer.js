$(document).ready(function(){
    $("#submit").click(submit_init);
});

var submit_init = function() {
    //var url = "http://localhost:5000/sendOffer";
    var url = "https://c20t3fdb.herokuapp.com/sendOffer";
    street = document.getElementById("street").value;
    zipcode = document.getElementById("zipcode").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    params = "provider=" + document.getElementById("provider").value + "&food=" + document.getElementById("food").value + 
                "&address=" + street + " " + zipcode + " " + city+" " + state + "&when=" + document.getElementById("when").value;

    doRequest('POST', url, params);
    /*data = JSON.parse(result);
    $('#response').append(data);
    console.log(data);*/
};

var doRequest = function(method, url, params) {
    var req = new XMLHttpRequest();

    req.open(method, url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            // SHOULD CALL REUPDATED SOMETHING ELSE
            console.log('worked yo.');
        }
    };
    req.send(params);
};