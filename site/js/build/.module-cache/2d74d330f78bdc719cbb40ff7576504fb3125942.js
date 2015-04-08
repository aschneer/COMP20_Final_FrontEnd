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

console.log(testdata[0]);
console.log(testdata[0].provider)

// Offer = React.createClass({
// 	render: function() {
// 		return (
// 			<li> 
// 				<div>
// 					<p> Provider: {this.props.data.provider}</p>
// 					<p> Food: {this.props.data.food}</p>
// 					<p> Address: {this.props.data.address}</p>
// 					<p> When: {this.props.data.when}</p>
// 				</div>
// 			</li>);
// 		// return <div> Hello {this.props.provider}</div>;
// 	}
// });



// React.render(
//   	<Offer data=testdata[0] />,
//   	document.getElementById('example')
// );

