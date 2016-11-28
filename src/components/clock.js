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
       <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Clock</h3>
        </div>
        <div class="panel-body">
          <h4 class="text-center">{this.state.time.toTimeString()}</h4>
        </div>
      </div>
    );
  }

}

export default Clock;