import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
interface RoutersValue {
  path: string,
  component: any
}
const createApp: (routers: RoutersValue[]) => React.ReactNode = function (routers) {
  console.log(routers);
  return (
    <HashRouter>
      {routers.map(item => <Route path={item.path} component={item.component} key={item.path} />)}
    </HashRouter>
  )
}
export {
  createApp
}