import React from 'react';
import './App.css';
import { Viewport, Operators, Numbers } from './Components/Components.jsx';



class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="calculator">
				<Viewport />
				<Operators />
				<Numbers />
			</div>
		);
	}
}


export default App;
