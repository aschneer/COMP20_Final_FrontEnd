OffersSidebar = React.createClass({displayName: "OffersSidebar",
	render: function() {
		return React.createElement("div", null, " STEVE ");
	}
});

Offer = React.createClass({displayName: "Offer",
	render: function() {
		return React.createElement("div", null, "Hello ", this.props.provider);
	}
});

React.render(
  	React.createElement(Offer, {provider: "Hunter"}),
  	document.getElementById('example')
);