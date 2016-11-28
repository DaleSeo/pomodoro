import React from 'react';
import Navbar from './navbar';
import Timer from './timer';
import Clock from './clock';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="container">
          <div class="row">
            <div class="col-xs-6">
              <Clock/>
            </div>
            <div class="col-xs-6">
              <Timer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;