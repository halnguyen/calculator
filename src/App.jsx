import React from "react";
import "./App.css";
import Viewport from "./Components/Viewport.jsx";
import Buttons from "./Components/Buttons.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "0",
      result: "0",
      numLocked: false, // false: not locking num buttons, true: locking num buttons
      decimal: true // true: can append decimal, false: cannot append decimal
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  handleClick(input) {
    /*
    1. Whenever the "." button is clicked, this.state.decimal is set to false, only
    appending an operator would set this state back to true. If false, clicking the "."
    will not append it to the expression
    2. If the last input was an operator, clicking another operator will not append it
    to the expression to be evaluated
    3. After clicking the "=" button to get the evaluated value, numLocked is set to
    false, which prevent user from hitting another button, to prevent loosing the original
    result for further calculation
    4. Only allowing one leading zero to be displayed
    */

    // An array holding all operators
    // Is used to check against input
    const ops = ["+", "-", "/", "*"];
    let calculation = this.state.expression;
    let tempResult;

    // State `numLocked` is set to true once the evaluation is successfuly executed
    // This prevents user from appending another number and to preserve the
    // value of the evaluated expression for the next calculation
    if ( this.state.numLocked === true && !ops.includes(input) ) {
      return;
    }

    // Preventing two periods in input
    if ( this.state.decimal === false && input === "." ) return;
    if ( this.state.decimal === true && input === "." ) {
      this.setState(
        {
          decimal: false
        }
      );
    }


    const getResult = () => {
      // This function will check for to see if the current calculation can be rendered
      // If yes then renders in the result field,
      // else do nothing
      try {
        const renderedResult = eval(calculation);
        return renderedResult;
      } catch(error) {
        return this.state.result;
      }
    }
    // Only 1 zero is allowed at the beginning
    // If the first input is an operator, render the ops once
    if (calculation === "0") {
      if ( ops.includes(input) ) {
        calculation += input;
        tempResult = getResult();
        this.setState(
          {
            decimal: true
          }
        );
      } else {
        calculation = input;
        tempResult = getResult();
      }
      this.setState(
        {
          expression: calculation,
          result: tempResult,
          numLocked: false
        }
      );
      return
    }

    // If last input was an operators then add only numbers
    if ( !ops.includes( calculation.slice(-1)), input ) {
      // Adding a space between operators and numbers if input is an operators
      if ( ops.includes(input) ) {
        calculation += ` ${input} `;
        this.setState(
          {
            decimal: true
          }
        );
      } else {
        calculation += input;
      }
    } else if ( !ops.includes(input) ){
      calculation += input
    }
    tempResult = getResult();
    this.setState(
      {
        expression: calculation,
        result: tempResult,
        numLocked: false
      }
    );

  }

  handleClear() {
    // Clear calculation and result
    this.setState(
      {
        expression: "0",
        result: "0",
        numLocked: false,
        decimal: true
      }
    );
  }

  evaluate() {
    // Evaluate expression in this.state.calculation
    const calculation = this.state.expression;
    let expressionEvaluated;

    // Calculation and rendering
    try {
      expressionEvaluated = eval(calculation);
    } catch (e) {
      expressionEvaluated = "Error";
      this.setState({
        expression: "0",
        result: "0",
        numLocked: false,
        decimal: true
      });
    }


    // Handling errors
    if (expressionEvaluated !== "Error") {
      this.setState({
        expression: expressionEvaluated.toString(),
        result: "",
        numLocked: true,
        decimal: true
      });
    }  else {
      // Display error, then return to the default state
      this.setState({
        expression: expressionEvaluated,
        result: ""
      });
      setTimeout(() => {
        this.setState({
          expression: "0",
          result: "0",
          numLocked: false,
          decimal: true
        });
      }, 750);
    }
  }


  render() {
    return (
      <div className="calculator">
        <Viewport
          result={this.state.result}
          calculation={this.state.expression} />
        <Buttons
          onClick={this.handleClick}
          eval={this.evaluate}
          clear={this.handleClear} />
      </div>
    );
  }
}

export default App;

