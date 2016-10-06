var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a href="/" className="navbar-brand"><i className="fa fa-clock-o" aria-hidden="true"></i> Pomodoro</a>
              <p className="navbar-text">Manage your time</p>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/about.html">About</a></li>
              <li><a href="/myPage.html">My Page</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <h1>Hello, React!</h1>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));