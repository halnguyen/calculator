import React, { Component } from "react";

export default class Viewport extends Component {
	render() {
		return (
				<div className="viewport">
					<div className="calculation">{this.props.calculation}</div>
					<div className="result">{this.props.result}</div>
				</div>
		);
	}
}
