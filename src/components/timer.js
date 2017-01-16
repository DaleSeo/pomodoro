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
      playing: false,
      remaining: modes[0].time
    };
  }

  componentDidMount() {
    this.play.bind(this);
    Notification.requestPermission();
  }

  componentWillUnmount() {
    this.pause.bind(this);
  }

  play() {
    if (this.state.playing) {
      return;
    }
    this.setState({ playing: true });
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    if (this.state.remaining == 0) {
      this.toggleMode();
      this.notify();
    } else {
      this.setState(prevState => ({remaining: prevState.remaining - 1}));
    }
  }

  notify() {
    // TODO: Show different messages according to the previous state.
    if (this.state.mode == modes[0]) {
      new Notification("It's time to work!");
    } else {
      new Notification("It's time to break!");
    }
  }

  toggleMode() {
    this.setState(prevState => ({
      mode: prevState.mode == modes[0] ? modes[1] : modes[0]
    }));
    this.setState({remaining: this.state.mode.time});
  }

  pause() {
    console.log('pause');
    if (!this.state.playing) {
      return;
    }
    this.setState({ playing: false });
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  backward() {
    console.log('backward');
    this.setState({remaining: this.state.mode.time});
  }

  forward() {
    console.log('forward');
    this.setState({remaining: 0});
  }

  update() {
    console.log('update');
    var remaining = window.prompt("Enter the time", CONFIG.WORK_DURATION.toString());
    this.setState({remaining: remaining * 60});
  }

  getClassName() {
    if (!this.state.playing) {
      return 'panel panel-danger';
    }
    if (this.state.mode === modes[0]) {
      return 'panel panel-success';
    } else {
      return 'panel panel-warning';
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
        <div class={this.getClassName()}>
          <div class="panel-heading">
            <h3 class="panel-title">Timer</h3>
          </div>
          <div class="panel-body ">
            <h4 class="text-center">{this.timeFormat()}</h4>
          </div>
        </div>
        <div class="text-center">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" onClick={this.play.bind(this)}><i class="fa fa-play" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-default" onClick={this.pause.bind(this)}><i class="fa fa-pause" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-default" onClick={this.backward.bind(this)}><i class="fa fa-step-backward" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-default" onClick={this.forward.bind(this)}><i class="fa fa-step-forward" aria-hidden="true"></i></button>
            <button type="button" class="btn btn-default" onClick={this.update.bind(this)}><i class="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    );
  }

}

export default Timer;