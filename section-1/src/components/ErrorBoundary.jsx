import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("[执行方法]getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("[执行方法]componentDidCatch", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
