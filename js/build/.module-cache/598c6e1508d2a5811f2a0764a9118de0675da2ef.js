Offer = React.createClass({displayName: "Offer",
	render: function() {
		return React.createElement("div", null, "Hello ", this.props.provider);
	}
});

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);