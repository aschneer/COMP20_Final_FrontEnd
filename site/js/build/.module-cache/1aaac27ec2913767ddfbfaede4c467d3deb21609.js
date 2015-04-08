// Does Parsing of list of json Offers
OfferSidebar = React.createClass({displayName: "OfferSidebar",
	render: function() {
		return (
			React.createElement("ol", null, 
		        this.props.offers.map(function(offer) {
        			return (
        				React.createElement(Offer, {key: string(offer.provider) + string(offer.food) + string(offer.address) + string(offer.when), 
        						provider: offer.provider, 
        						food: offer.food, 
					  			address: offer.address, 
					  			when: offer.when}) );
        		})
      		)
      	);
	}
});

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
			)
		);
	}
});

// test = testdata[0];

React.render(
	React.createElement(OfferSidebar, {offers: data}),
  	// < Offer provider={test.provider} food={test.food} 
  	// 		address={test.address} when={test.when}/>,
  	document.getElementById('example')
);
