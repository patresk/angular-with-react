/**
 * @jsx React.DOM
 *
 */

var Cell = React.createClass({
	render: function() {
		var spanClass = "";
		if (this.props.data < 0) {
			spanClass += " red";
		}
		if (this.props.data > 0) {
			spanClass += " green";
		}
		return (
			<td key={this.props.index}>
				<span className={spanClass}>{this.props.data}</span> 
				&nbsp;
				<span>{this.props.data > 0 ? "high" : "low"}</span>						
			</td>
		)
	},
	shouldComponentUpdate: function(nextProps) {
		// when data didnt change, we will skip the render() to improve performance
		return !(this.props.data == nextProps.data);
	}
});


var DataComponent = React.createClass({

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

				return <Cell index={index} data={item} />
			})
			return <tr key={index}>{columns}</tr>
		});
		
		return <table className="table table-striped">{rows}</table>
	}
});