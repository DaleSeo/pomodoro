import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.setState({time: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="alert alert-info" role="alert">
          <h2 className="text-center">{this.state.time.toTimeString().substring(0, 8)}</h2>
        </div>
      </div>
    );
  }

}

export default Clock;