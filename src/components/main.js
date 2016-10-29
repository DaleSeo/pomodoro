var React = require('react');
var Navbar = require('./navbar');
var Timer = require('./timer');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Timer/>
        </div>
      </div>
    );
  }
});

module.exports = Main;