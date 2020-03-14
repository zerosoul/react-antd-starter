import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
