$(document).ready(function(){
    $("#submit").click(submit_init);
});

var submit_init = function() {
    var url = "https://c20t3fdb.herokuapp.com/sendOffer";
    street = document.getElementById("street").value;
    // zipcode = document.getElementById("zipcode").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    params = "seller=" + document.getElementById("provider").value + "&food=" + document.getElementById("food").value + 
                "&address=" + street + " " + /*zipcode + */" " + city+" " + state + "&when=" + document.getElementById("when").value;

    var req = new XMLHttpRequest();

    req.open('POST', url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            // SHOULD CALL REUPDATED SOMETHING ELSE
            console.log('worked yo.');
        }
    };
    req.send(params);
};
