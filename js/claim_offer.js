var claim_offer = function(offer_id) {
	var url = "https://c20t3server.herokuapp.com/claimOffer";
    var username = sessionStorage.getItem('username');
	var params = "_id="+offer_id+"&buyer=" + username;

    var req = new XMLHttpRequest();

    req.open("POST", url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
        }
    };
    req.send(params);

    load_buymode_claimed();
    map_update();
    $("#available_items").hide();
    $("#claimed_offers").show();
};
