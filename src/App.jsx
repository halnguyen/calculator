import React from "react";
import "./App.css";
import Viewport from "./Components/Viewport.jsx";
import Buttons from "./Components/Buttons.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: "0",
      result: "0"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  handleClick(e) {
    const input = e.target.innerHTML;
    const operators = ["+", "-", "*", "/"];

    let currentState = this.state;

    // Handle the rendering of results

    if (currentState.calculation === "0") {
      // if the first input is 0 and the second input is an operator
      // render " 0 {operator} "
      if (operators.includes(input)) {
        currentState.calculation += ` ${input} `;
        // put in a function
        try {
          currentState.result = eval(currentState.calculation);
        } catch (error) {
          currentState.result = this.state.result;
        }
      } else {
        currentState.calculation = input;
        // put in a function
        try {
          currentState.result = eval(currentState.calculation);
        } catch (error) {
          currentState.result = this.state.result;
        }
      }

      this.setState(currentState);
      return;
    }

    // If last input was an operators then add only numbers
    if (!operators.includes(currentState.calculation.slice(-1), input)) {
      if (operators.includes(input)) {
        currentState.calculation += ` ${input} `;
      } else {
        currentState.calculation += input;
      }
    } else if (!operators.includes(input)) {
      currentState.calculation += input;
    }

    // Handling the result field
    // Try evaluating the expression, render if successful
    // If not render current eval state
    try {
      currentState.result = eval(currentState.calculation);
    } catch (error) {
      currentState.result = this.state.result;
    }

    this.setState(currentState);
  }

  handleClear() {
    // Clear calculation and result
    this.setState({
      calculation: "0",
      result: "0"
    });
  }

  evaluate() {
    // Evaluate expression in this.state.calculation
    const expression = this.state.calculation;
    let expressionEvaluated;
    try {
      expressionEvaluated = eval(expression);
    } catch (e) {
      expressionEvaluated = "Error";
      this.setState({
        calculation: "0",
        result: "0"
      });
    }

    // Handling errors
    if (expressionEvaluated !== "Error") {
      this.setState({
        calculation: expressionEvaluated.toString(),
        result: ""
      });
    } else {
      // Display error, then return to the default state
      this.setState({
        calculation: expressionEvaluated,
        result: ""
      });
      setTimeout(() => {
        this.setState({
          calculation: "0",
          result: "0"
        });
      }, 750);
    }
  }


  render() {
    return (
        <div className="calculator">
          <Viewport />
          <Buttons />
        </div>
    );
  }
}

export default App;

