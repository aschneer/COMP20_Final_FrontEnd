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

Offer = React.createClass({
	render: function() {
		return (
			<li> 
				<div>
					<p> Provider: {this.props.provider}</p>
					<p> Food: {this.props.food}</p>
					<p> Address: {this.props.address}</p>
					<p> When: {this.props.when}</p>
				</div>
			</li>);
	}
});

test = testdata[0];

React.render(
  	< Offer provider={test.provider} food={test.food} 
  			address={test.address} when={test.when}/>,
  	document.getElementById('example')
);

