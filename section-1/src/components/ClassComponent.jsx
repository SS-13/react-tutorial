import React, { Component } from "react";
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: "ClassComponent init",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[执行方法]getDerivedStateFromProps", props, state);
    return {
      memo: props.text,
    };
  }

  render() {
    const { memo } = this.state;
    return <div>ClassComponent memo: {memo}</div>;
  }

  componentDidMount() {
    console.log("[执行方法]componentDidMount");
  }

  /**
   * 如果返回false，UNSAFE_componentWillUpdate(), render(), 和 componentDidUpdate()不会执行
   * @param {*} nextProps
   * @param {*} nextState
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[执行方法]shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[执行方法]getSnapshotBeforeUpdate", prevProps, prevState);
    return "Snapshot";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[执行方法]componentDidUpdate", prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("[执行方法]componentWillUnmount");
  }

  UNSAFE_componentWillMount() {
    console.log("[执行方法]UNSAFE_componentWillMount");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("[执行方法]UNSAFE_componentWillReceiveProps", nextProps);
  }

  UNSAFE_componentWillUpdate() {}
}
