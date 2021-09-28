import React, { Component } from "react";
import ClassComponent from "./components/ClassComponent";
import ErrorBoundary from "./components/ErrorBoundary";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "App text",
      number: 0,
    };
  }

  render() {
    const { text, number } = this.state;
    return (
      <>
        <div>App text: {text}</div>
        <button
          onClick={() => {
            this.setState((state) => ({ ...state, number: state.number + 1 }));
          }}
        >
          修改父类text
        </button>
        <ErrorBoundary>
          <ClassComponent text={text + number} />
        </ErrorBoundary>
      </>
    );
  }
}
