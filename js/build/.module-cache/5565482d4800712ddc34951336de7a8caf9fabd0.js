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
					React.createElement("p", null, " Provider: ", this.props.data.provider), 
					React.createElement("p", null, " Food: ", this.props.data.food), 
					React.createElement("p", null, " Address: ", this.props.data.address), 
					React.createElement("p", null, " When: ", this.props.data.when)
				)
			));
		// return <div> Hello {this.props.provider}</div>;
	}
});

React.render(
  	React.createElement(Offer, {provider: "Hunter"}),
  	document.getElementById('example')
);

console.log(data);