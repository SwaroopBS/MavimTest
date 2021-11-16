
import { Route, Switch } from 'react-router-dom';

import Home_page from './pages/Home';
import Student from './pages/Student';
import Admin_page from './pages/Admin';
import React from 'react';

function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Home_page />
        </Route>
        <Route path='/Home' exact>
          <Home_page />
        </Route>
        <Route path='/Student' exact>
          <Student />
        </Route>
        <Route path='/Admin' exact>
          <Admin_page />
        </Route>
      </Switch>
  );
}

export default App;
