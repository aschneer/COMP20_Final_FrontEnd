var claim_offer = function(offer_id) {
	//var url = "http://localhost:5000/sendOffer";
	var url = "https://c20t3fdb.herokuapp.com/claimOffer";
    var username = sessionStorage.getItem('username');
	var params = "_id="+offer_id+"&buyer=" + username;

    var req = new XMLHttpRequest();
    console.log('yesting');

    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            console.log('worked yo.');
        }
    };
    req.send(params);

    load_buymode_claimed();
    map_update();
    $("#available_items").hide();
    $("#claimed_offers").show();
};
