// Does Parsing of list of json Offers
/*OffersSidebar = React.createClass({
	var offerList = [];
	var len = this.props.offers.len;
	for (var i = 0; i < len; i++) {
		var offerID = "offer" + i;
		var elem = document.createElement('div');
		elem.setAttribute('id', offerID);
		offersList.push(
			React.render(<Offer data={this.props.offers[i]} />, elem);
		);
	}

	render: function() {
		var offers = this.props.offers;
		return (
			<ol>
		        {offers.map(function(offer) {
        			return 
        				<li> 
        					<Offer data=offer
        				</li>;
        		})}
      		</ol>
	}
});*/

Offer = React.createClass({displayName: "Offer",
	render: function() {
		return React.createElement("div", null, "Hello ", this.props.provider);
	}
});

React.render(
  	React.createElement(Offer, {provider: "Hunter"}),
  	document.getElementById('example')
);

console.log(data);