import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2019",
      newDeadline: ""
    };
  }

  chaneDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  leading0 (num) {
      return num < 10 ? '0' + num : num;
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to <span>{this.leading0(this.state.deadline)}</span>
        </div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event =>
              this.setState({ newDeadline: event.target.value })
            }
          />
          <Button onClick={() => this.chaneDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
