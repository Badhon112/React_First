import React, { Component } from "react";

export default class MyComponentclass extends Component {
  state = {
    count: 0,
    date: new Date(),
  };
  componentDidMount() {
    const { count } = this.state;
    document.title = `Clciked ${count} Time`;
    setInterval(this.time, 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clciked ${count} Time`;
    setInterval(this.time, 1000);
  }
  adClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  time = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type="button" onClick={this.adClick}>
            Click{" "}
          </button>
        </p>
      </div>
    );
  }
}
