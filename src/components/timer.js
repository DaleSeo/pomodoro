import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {time: new Date()}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({time: new Date()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('handleSubmit');
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <div className="alert alert-success" role="alert">
          <h2 className="text-center">{this.state.time.toLocaleTimeString()}</h2>
        </div>
        <div className="text-center">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default"><i className="fa fa-play" aria-hidden="true"></i></button>
            <button type="button" className="btn btn-default"><i className="fa fa-pause" aria-hidden="true"></i>
            </button>
            <button type="button" className="btn btn-default"><i className="fa fa-stop" aria-hidden="true"></i></button>
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