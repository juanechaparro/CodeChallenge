import React from "react";

import "bootstrap/dist/css/bootstrap.css";

let inputText;

function transpose2(input) {
  let linesArray = input.split(/\n/g);
  let chainMatrix = "";
  let linesLengths = linesArray.map((l) => l.length);

  let maxLength = Math.max(...linesLengths);

  for (var i = 0; i < maxLength; i++) {
    for (var j = 0; j < linesArray.length; j++) {
      chainMatrix += linesArray[j].charAt(i) || " ";
    }
    chainMatrix += "\n";
  }
  console.log(chainMatrix);
  return chainMatrix;
}


class InputChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", outputArray: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    inputText = this.state.value;
    console.log(inputText, inputText.length);
    // inputText = inputText.replace(/\n/g, "{ <br />}");

    console.log("transposed", transpose2(inputText));

    this.setState({ outputArray: transpose2(inputText) });
  }

  render() {
    return (
      <div>
        <h2>Challenge 2</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Enter the matrix you want to transpose :</label>
            <textarea
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Transpose" />
        </form>
        <br />
        <br />
        <div className="card" style={{ width: "18rem", alignItems: "center" }}>
          {this.state.outputArray}
          <div className="card-body">
            <h5 className="card-title">Transposed</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default InputChallenge;
