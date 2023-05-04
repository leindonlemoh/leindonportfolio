import React from "react";
import "./styles/Clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  secs() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.secs(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="clock">
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;
