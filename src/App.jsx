import React from 'react';
import './App.css';



class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			calculation: "0",
			result: ""
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.evaluate = this.evaluate.bind(this);
	}

	handleClick(e) {
		const input = e.target.innerHTML;
		let calculation = this.state.calculation;
		this.setState(
			{
				calculation: calculation + input,
				result: 'e'
			}
		);
	}

	handleClear() {
		// Clear calculation and result
		this.setState(
			{
				calculation: "0",
				result: ""
			}
		);
	}

	evaluate() {
		// Evaluate expression in this.state.calculation
		const expression = this.state.calculation;
		let expressionEvaluated;
		try {
			expressionEvaluated = eval(expression);
		} catch {
			throw new Error("Invalid input");
			expressionEvaluated = "Invalid Input";
		}

		console.log(expressionEvaluated);

		this.setState(
			{
				calculation: expressionEvaluated,
				result: ""
			}
		);
	}

	generateOneToNine() {
		// Generating numbers from 1 to 9
		let buttonArray = [];
		for ( let i = 1; i < 10; i++ ) {
			buttonArray.push(
				<button
					onClick={this.handleClick}
					key={i}>
					{i}
				</button>
			);
		}

		return buttonArray;
	}

	render() {
		return (
			<div className="calculator">

				<div className="viewport">
					<div className="calculation">
						{this.state.calculation}
					</div>
					<div className="result">
						{this.state.result}
					</div>
				</div>

				<div className="operators">
					<button onClick={this.handleClear}>AC</button>
					<button onClick={this.handleClick}>+</button>
					<button onClick={this.handleClick}>-</button>
					<button onClick={this.handleClick}>/</button>
					<button onClick={this.handleClick}>*</button>
				</div>

				<div className="numbers">
					{this.generateOneToNine()}
					<button onClick={this.handleClick}>0</button>
					<button onClick={this.handleClick}>.</button>
					<button onClick={this.evaluate}>=</button>
				</div>
			</div>
		);
	}
}


export default App;
