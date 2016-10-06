var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
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
    );
  }
});

module.exports = Navbar;