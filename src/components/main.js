import React from 'react';
import Navbar from './navbar';
import Timer from './timer';
import Clock from './clock';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar/>
        <div class="container">
          <Clock/>
          <Timer/>
        </div>
      </div>
    );
  }
});

export default Main;