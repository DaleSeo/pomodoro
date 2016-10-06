var React = require('react');
var ReactDOM = require('react-dom');
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

ReactDOM.render(<Main/>, document.getElementById('main'));