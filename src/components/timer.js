import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {time: 1500};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState(prevState => ({time: prevState.time - 1})), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('handleSubmit');
  }

  handlePlay(event) {
    console.log('handlePlay');
    this.timer = setInterval(() => this.setState(prevState => ({time: prevState.time - 1})), 1000);
  }

  handlePause(event) {
    console.log('handlePause');
    clearInterval(this.timer);
  }

  handleStop(event) {
    console.log('handleStop');
    clearInterval(this.timer);
    this.setState({time: 1500});
  }

  timeFormat() {
    const time = this.state.time;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return this.zeroFill(min) + ":" + this.zeroFill(sec);
  }

  zeroFill(n) {
    return (n < 10 ? '0' : '') + n;
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <div className="alert alert-success" role="alert">
          <h2 className="text-center">{this.timeFormat()}</h2>
        </div>
        <div className="text-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.handlePlay}><i className="fa fa-play" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default" onClick={this.handlePause}><i className="fa fa-pause" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default" onClick={this.handleStop}><i className="fa fa-stop" aria-hidden="true"></i></button>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="minute">Enter a minute: </label>
            <input type="text" name="minute" className="form-control"/>
          </div>
          <div className="form-group text-right">
            <button type="reset" className="btn btn-default">Reset</button>
            <button type="submit" className="btn btn-primary">Start</button>
          </div>
        </form>
      </div>
    );
  }

}

module.exports = Timer;