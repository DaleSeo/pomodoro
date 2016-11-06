import React from 'react';
import CONFIG from '../config';

const modes = [
  { name: 'work', time: CONFIG.WORK_DURATION * 60},
  { name: 'break', time: CONFIG.BREAK_DURATION * 60}
];

class Timer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: modes[0],
      remaining: modes[0].time
    };
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
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  stop() {
    console.log('handle');
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({remaining: this.state.mode.time});
  }

  update() {
    console.log('update');
    var remaining = window.prompt("Enter the time", CONFIG.WORK_DURATION.toString());
    this.setState({remaining: remaining * 60});
  }

  getClassName() {
    if (this.state.mode === modes[0]) {
      return 'alert alert-success';
    } else {
      return 'alert alert-warning';
    }
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
        <div className={this.getClassName()} role="alert">
          <h2 className="text-center">{this.timeFormat()}</h2>
        </div>
        <div className="text-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.play.bind(this)}><i className="fa fa-play" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default" onClick={this.pause.bind(this)}><i className="fa fa-pause" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default" onClick={this.stop.bind(this)}><i className="fa fa-stop" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default" onClick={this.update.bind(this)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    );
  }

}

export default Timer;