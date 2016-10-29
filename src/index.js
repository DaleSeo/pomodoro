require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("font-awesome-webpack");

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

ReactDOM.render(<Main/>, document.getElementById('main'));
