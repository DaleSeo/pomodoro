var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function () {
    // return <div><h1>Hello React</h1></div>;
    return React.createElement('div', null, 'Hello React');
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));