import React from 'react';






class Viewport extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			calculation: "0",
			result: "0" 
		};
	}

	render () {
		return (
			<div className="viewport">
				<div className="calculation">
					{this.state.calculation}	
				</div>
				<div className="result">
					{this.state.result}
				</div>
			</div>
		);
	}
}





class Operators extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="operators">
				<button>+</button>
				<button>-</button>
				<button>/</button>
				<button>*</button>
				<button>AC</button>
			</div>
		);
	}
}




class Numbers extends React.Component {
	constructor(props) {
		super(props);
	}

	generateOneToNine() {
		let buttonArray = [];
		for ( let i = 1; i < 10; i++ ) {
			buttonArray.push(<button key={i}>{i}</button>);
		}
		
		return buttonArray;
	}

	render () {
		return (
			<div className="numbers">
				{this.generateOneToNine()}
				<button>0</button>
				<button>.</button>
				<button>=</button>
			</div>
		);
	}
}















export { Viewport, Operators, Numbers };
