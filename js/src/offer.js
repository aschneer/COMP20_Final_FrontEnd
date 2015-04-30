// Does Parsing of list of json Offers
OfferSidebar = React.createClass({
	render: function() {
		return (
			<ol>
		        {this.props.offers.map(function(offer) {
        			return (
        				<Offer  key 		=	{offer._id}
        						provider 	=	{offer.provider} 
        						food 		=	{offer.food} 
					  			address 	= 	{offer.address}
					  			when 		= 	{offer.when} /> );
        		})}
      		</ol>
      	);
	}
});

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
			</li>
		);
	}
});

// test = testdata[0];

React.render(
	<OfferSidebar offers={data} />,
  	document.getElementById('example')
);