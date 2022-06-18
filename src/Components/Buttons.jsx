import React, { Component } from "react";

export default class Buttons extends Component {

	generateOneToNine() {
		// Generating numbers from 1 to 9
		let buttonArray = [];
		for (let i = 1; i < 10; i++) {
			buttonArray.push(
				<button onClick={this.handleClick} key={i}>
					{i}
				</button>
			);
		}

		return buttonArray;
	}
	render() {
		return (
			<div className="buttons">
				<div className="numbers">
					{this.generateOneToNine()}
					<button >0</button>
					<button >.</button>
					<button >=</button>
				</div>
				<div className="operators">
					<button >AC</button>
					<button >+</button>
					<button >-</button>
					<button >/</button>
					<button >*</button>
				</div>
			</div>
		);
	}
}
