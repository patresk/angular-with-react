/**
 * @jsx React.DOM
 *
 */

var Cell = React.createClass({displayName: 'Cell',
	render: function() {
		var spanClass = "";
		if (this.props.data < 0) {
			spanClass += " red";
		}
		if (this.props.data > 0) {
			spanClass += " green";
		}
		return (
			React.DOM.td( {key:this.props.index}, 
				React.DOM.span( {className:spanClass}, this.props.data), 
				" ",
				React.DOM.span(null, this.props.data > 0 ? "high" : "low")						
			)
		)
	},
	shouldComponentUpdate: function(nextProps) {
		// when data didnt change, we will skip the render() to improve performance
		return !(this.props.data == nextProps.data);
	}
});


var DataComponent = React.createClass({displayName: 'DataComponent',

	getDefaultProps: function() {
		return {
			list: []
		};
	},

	render: function() {
		
		var rows = this.props.list.map(function(item, index) {
			var columns = item.map(function(item, index) {
				
				// var spanClass = "";
				// if (item < 0) {
				// 	spanClass += " red";
				// }
				// if (item > 0) {
				// 	spanClass += " green";
				// }

				// return <td key={index}>
				// 		<span className={spanClass}>{item}</span> 
				// 		&nbsp;
				// 		<span>{item > 0 ? "high" : "low"}</span>						
				// 	</td>

				return Cell( {index:index, data:item} )
			})
			return React.DOM.tr( {key:index}, columns)
		});
		
		return React.DOM.table( {className:"table table-striped"}, rows)
	}
});