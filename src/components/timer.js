import React from 'react';

const modes = [
  { name: 'work', time: 5},
  { name: 'break', time: 1}
];

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: modes[0],
      remaining: modes[0].time
    };

    this.handlePlay = this.play.bind(this);
    this.handlePause = this.pause.bind(this);
    this.handleStop = this.stop.bind(this);
  }

  componentDidMount() {
    Notification.requestPermission();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  play() {
    console.log('play');
    this.timer = setInterval(() => {
      if (this.state.remaining == 0) {
        this.pause();
        new Notification("It's time to toggle!");
        this.toggleMode();
      } else {
        this.setState(prevState => ({remaining: prevState.remaining - 1}))
      }
    }, 1000);
  }

  toggleMode() {
    this.setState(prevState => ({
      mode: prevState.mode == modes[0] ? modes[1] : modes[0]
    }));
    this.setState({remaining: this.state.mode.time});
  }

  pause() {
    console.log('pause');
    clearInterval(this.timer);
  }

  stop() {
    console.log('handle');
    clearInterval(this.timer);
    this.setState({remaining: this.state.mode.time});
  }

  timeFormat() {
    const time = this.state.remaining;
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
      </div>
    );
  }

}

module.exports = Timer;