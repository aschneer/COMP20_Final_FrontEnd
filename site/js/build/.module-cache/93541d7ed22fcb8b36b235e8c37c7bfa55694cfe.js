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
		return (
			React.createElement("li", null, 
				React.createElement("div", null, 
					React.createElement("p", null, " Provider: ", this.props.provider), 
					React.createElement("p", null, " Food: ", this.props.food), 
					React.createElement("p", null, " Address: ", this.props.address), 
					React.createElement("p", null, " When: ", this.props.when)
				)
			));
	}
});

test = testdata[0];

React.render(
  	React.createElement(Offer, {provider: test.provider, food: test.food, address: test.address, when: test.when}),
  	document.getElementById('example')
);

