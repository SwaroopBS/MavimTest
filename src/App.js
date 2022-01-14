
import { Route, Switch, Redirect } from 'react-router-dom';
import Home_page from './pages/Home';
import List_page from './pages/List';
import Order_page from './pages/Order';
import Login_page from './pages/Login';
import Signup_page from './pages/Signup';
import React, { useState, useEffect, useCallback }from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedin, setloggedin] = useState(false);

  const acc_create = () => {
    // setUsername(username);
    // setPassword(password);

    console.log(username);
  };


  return (
      <Switch>
        {loggedin && (<Route path='/' exact>
          <Home_page />
        </Route>)}

        <Route path='/Login' exact>
          <Login_page setloggedin = {setloggedin} loggedin = {loggedin}/>
        </Route>

        <Route path='/Signup' exact>
          <Signup_page setUsername= {setUsername} setPassword = {setPassword} />
        </Route>

        {loggedin && (<Route path='/Home' exact>
          <Home_page setloggedin = {setloggedin} />
        </Route>)}

        {loggedin && (<Route path='/List' exact>
          <List_page setloggedin = {setloggedin} />
        </Route>)}

        {loggedin && (<Route path='/Order' exact>
          <Order_page setloggedin = {setloggedin} />
        </Route>)}

        <Route path='*'>
          <Redirect to='/Login' />
        </Route>
      </Switch>
  );
}

export default App;
