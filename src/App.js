import React, { memo } from 'react';
import ControlZone from './pages/control';
import ListShow from './pages/listShow'
import { HashRouter } from "react-router-dom";

import { store } from './store/index'
import { Provider } from 'react-redux'

export default memo(function App() {

  return (
    <HashRouter>
      <Provider store={store}>
        <ControlZone />
        <br/>
        <ListShow />
      </Provider>
    </HashRouter>
  )
})
