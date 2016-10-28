var React = require('react');

var Timer = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    alert('handleSubmit');
  },
  render: function () {
    return (
      <div>
        <h1>Timer</h1>
        <form onSubmit="{this.handleSubmit}">
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
});

module.exports = Timer;