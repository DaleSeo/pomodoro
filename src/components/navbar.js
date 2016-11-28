var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a href="/" class="navbar-brand"><i class="fa fa-clock-o" aria-hidden="true"></i> Pomodoro</a>
            <p class="navbar-text">Manage your time</p>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/about.html">About</a></li>
            <li><a href="/myPage.html">My Page</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default Navbar;