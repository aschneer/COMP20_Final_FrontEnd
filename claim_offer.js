var claim_offer = function(offer_id) {
	//var url = "http://localhost:5000/sendOffer";
    console.log(offer_id);
	var url = "https://c20t3fdb.herokuapp.com/claimOffer";
    var login = sessionStorage.getItem('username');
	var params = "id="+offer_id+"&login=" + login;


	doRequest('POST', url, params);
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