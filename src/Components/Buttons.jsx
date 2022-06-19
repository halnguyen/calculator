import React, { Component } from "react";

export default class Buttons extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	generateOneToNine() {
		// Generating numbers from 1 to 9
		let buttonArray = [];
		for (let i = 1; i < 10; i++) {
			buttonArray.push(
				<button onClick={this.handleClick} value={`${i}`} key={i}>
					{i}
				</button>
			);
		}

		return buttonArray;
	}

	handleClick(event) {
		const input = event.target.value;
		this.props.onClick(input);
	}

	render() {
		return (
			<div className="buttons">
				<div className="numbers">
					{this.generateOneToNine()}
					<button onClick={this.handleClick} value="0" >0</button>
					<button onClick={this.handleClick} value="." >.</button>
					<button onClick={this.props.eval} >=</button>
				</div>
				<div className="operators">
					<button onClick={this.props.clear} >AC</button>
					<button onClick={this.handleClick} value="+" >+</button>
					<button onClick={this.handleClick} value="-" >-</button>
					<button onClick={this.handleClick} value="/" >/</button>
					<button onClick={this.handleClick} value="*" >*</button>
				</div>
			</div>
		);
	}
}
