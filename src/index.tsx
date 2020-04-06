import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { RoutesMenu } from '@/router/menu'
import { createApp } from '@/init/createApp'
ReactDOM.render(
  <React.Fragment>
    {createApp(RoutesMenu)}
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
